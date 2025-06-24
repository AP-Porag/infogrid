<?php

namespace App\Http\Controllers\Admin\Information;

use App\DataTables\InformationDataTable;
use App\Http\Controllers\Controller;
use App\Http\Requests\InformationRequest;
use App\Models\Gallery;
use App\Models\Information;
use App\Services\ChillerService;
use App\Services\CompressorService;
use App\Services\FanService;
use App\Services\InformationService;
use App\Services\MotorService;
use App\Services\PumpService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class InformationController extends Controller
{
    protected $informationService;
    protected $pumpService;
    protected $fanService;
    protected $compressorService;
    protected $chillerService;
    protected $motorService;


    public function __construct(InformationService $informationService,PumpService $pumpService,FanService $fanService,CompressorService $compressorService,ChillerService $chillerService,MotorService $motorService)
    {
        $this->informationService = $informationService;
        $this->pumpService = $pumpService;
        $this->fanService = $fanService;
        $this->compressorService = $compressorService;
        $this->chillerService = $chillerService;
        $this->motorService = $motorService;
    }

    public function index(InformationDataTable $dataTable)
    {
        set_page_meta('Information');
        $project = null;
        return $dataTable->render('admin.information.index',compact('project'));
    }

    public function create(Request $request)
    {
        set_page_meta('Data Collection');
        $project_id = $request->query('project_id');
        return view('admin.information.create',compact('project_id'));
    }

    public function store(Request $request)
    {

        try {
//            $data = $request->validated();
            $data = $request->all();
            // Authenticated user ID
            $userId = Auth::id();

            // Generate unique SKU
            $sku = $this->generateSku();

            // Append user_id and sku to data array
            $dataToSave = array_merge($data, [
                'user_id' => $userId,
                'sku' => $sku,
                'images' => count($data['images']),
            ]);
            $pumpData = $data['pump'];
            $fanData = $data['fan'];
            $compressorData = $data['compressor'];
            $chillerData = $data['chiller'];
            $motorData = $data['motor'];


            $information = $this->informationService->storeOrUpdate($dataToSave, null);

            if ($information){
                if ($data['itemType'] == 'Pump') {
                    $dataToSave = array_merge($pumpData, [
                        'information_id' => $information->id,
                    ]);
                    $this->pumpService->storeOrUpdate($dataToSave, null);
                }

                if ($data['itemType'] == 'Fan') {
                    $dataToSave = array_merge($fanData, [
                        'information_id' => $information->id,
                    ]);
                    $this->fanService->storeOrUpdate($dataToSave, null);
                }
                if ($data['itemType'] == 'Air Compressor') {
                    $dataToSave = array_merge($compressorData, [
                        'information_id' => $information->id,
                    ]);
                    $this->compressorService->storeOrUpdate($dataToSave, null);
                }
                if ($data['itemType'] == 'Chiller') {
                    $dataToSave = array_merge($chillerData, [
                        'information_id' => $information->id,
                    ]);
                    $this->chillerService->storeOrUpdate($dataToSave, null);
                }
                if ($data['itemType'] == 'Motors') {
                    $dataToSave = array_merge($motorData, [
                        'information_id' => $information->id,
                    ]);
                    $this->motorService->storeOrUpdate($dataToSave, null);
                }
            }

            if (!empty($data['images'])) {
                foreach ($data['images'] as $base64Image) {
                    // Extract and clean base64 string
                    if (str_contains($base64Image, 'data:image/png;base64,')) {
                        $base64Image = str_replace('data:image/png;base64,', '', $base64Image);
                        $extension = 'png';
                    } elseif (str_contains($base64Image, 'data:image/jpeg;base64,')) {
                        $base64Image = str_replace('data:image/jpeg;base64,', '', $base64Image);
                        $extension = 'jpg';
                    } else {
                        continue; // Skip unsupported formats
                    }

                    $base64Image = str_replace(' ', '+', $base64Image);

                    try {
                        $imageContent = base64_decode($base64Image);
                        if ($imageContent === false) {
                            continue; // Skip invalid base64
                        }

                        $imageName = Str::random(15) . '.' . $extension;
                        Storage::disk('public')->put('uploaded/' . $imageName, $imageContent);

                        $gallery = Gallery::create([
                            'information_id' => $information->id,
                            'image' => 'uploaded/' . $imageName,
                        ]);
                    } catch (\Exception $e) {
                        \Log::error("Image upload failed: " . $e->getMessage());
                        continue;
                    }
                }
            }


            $response = ['status' => 200, 'message' => 'Success', 'data' => $information];
            return response()->json($response);
        } catch (\Exception $e) {

        }
        return back();
    }

    public function show($id)
    {
        set_page_meta('Equipment Details');
        $item = $this->informationService->get($id);
        return view('admin.information.show', compact('item'));
    }

    public function edit($id)
    {
        try {
            set_page_meta('Edit User');
            $user = $this->userService->get($id);
            return view('admin.users.edit', compact('user'));
        } catch (\Exception $e) {
            log_error($e);
        }
        return back();
    }

    public function update(UserRequest $request, $id)
    {
        $data = $request->validated();
        try {
            $this->userService->storeOrUpdate($data, $id);
            record_updated_flash();
            return redirect()->route('admin.users.index');
        } catch (\Exception $e) {
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->informationService->delete($id);
            record_deleted_flash();
            return back();
        } catch (\Exception $e) {
            return back();
        }
    }

    private function generateSku(): string
    {
        $year = now()->year;

        // Get the latest SKU for the current year
        $latestItem = Information::where('sku', 'LIKE', "EEF-{$year}%")
            ->orderByDesc('sku')
            ->first();

        // Extract and increment the last number
        if ($latestItem && preg_match("/EEF-{$year}(\d{6})/", $latestItem->sku, $matches)) {
            $lastNumber = (int) $matches[1];
        } else {
            $lastNumber = 0;
        }

        $newNumber = str_pad($lastNumber + 1, 6, '0', STR_PAD_LEFT);
        return "EEF-{$year}{$newNumber}";
    }
}
