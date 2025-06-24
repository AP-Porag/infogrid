<?php

namespace App\Http\Controllers\Admin\Information;

use App\DataTables\InformationDataTable;
use App\Http\Controllers\Controller;
use App\Http\Requests\InformationRequest;
use App\Models\Gallery;
use App\Models\Information;
use App\Services\AhuService;
use App\Services\BoilerService;
use App\Services\ChillerService;
use App\Services\CompressorService;
use App\Services\CoolingService;
use App\Services\FanService;
use App\Services\InformationService;
use App\Services\MotorService;
use App\Services\PumpService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class InformationController extends Controller
{
    protected $informationService;
    protected $pumpService;
    protected $fanService;
    protected $compressorService;
    protected $chillerService;
    protected $motorService;
    protected $coolingService;
    protected $boilerService;
    protected $ahuService;


    public function __construct(
        InformationService $informationService,
        PumpService $pumpService,
        FanService $fanService,
        CompressorService $compressorService,
        ChillerService $chillerService,
        MotorService $motorService,
        BoilerService $boilerService,
        CoolingService $coolingService,
        AhuService $ahuService
    )
    {
        $this->informationService = $informationService;
        $this->pumpService = $pumpService;
        $this->fanService = $fanService;
        $this->compressorService = $compressorService;
        $this->chillerService = $chillerService;
        $this->motorService = $motorService;
        $this->boilerService = $boilerService;
        $this->coolingService = $coolingService;
        $this->ahuService = $ahuService;
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
        \DB::beginTransaction();

        try {
            $data = $request->all();
            $userId = Auth::id();
            $sku = $this->generateSku();

            // Step 1: Validate request data
            $validator = Validator::make($data, [
                'project_id' => 'required|integer',
                'itemType' => 'required|string',
                'images' => 'nullable|array',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 400,
                    'errors' => $validator->errors()
                ], 400);
            }

            // Step 2: Create main Information record
            $information = Information::create([
                'user_id' => $userId,
                'project_id' => $data['project_id'],
                'sku' => $sku,
                'itemType' => $data['itemType'], // Ensure this column exists in the DB
                'observations' => $data['observations'] ?? null,
                'name_location' => $data['name_location'] ?? null,
                'make_model' => $data['make_model'] ?? null,
                'images' => isset($data['images']) ? count($data['images']) : 0,
            ]);

            if (!$information) {
                throw new \Exception("Failed to create information record");
            }

            // Step 3: Store Equipment Data based on itemType
            $itemType = $data['itemType'];

            $equipmentTypeMap = [
                'Pump' => 'pump',
                'Fan' => 'fan',
                'Air Compressor' => 'compressor',
                'Chiller' => 'chiller',
                'Motors' => 'motor',
                'Boiler' => 'boiler',
                'Cooling Tower' => 'cooling',
                'AHU' => 'ahu',
            ];

            $equipmentKey = $equipmentTypeMap[$itemType] ?? null;
            $equipmentData = $equipmentKey ? ($data[$equipmentKey] ?? null) : null;

            if ($equipmentData) {
                $serviceMethod = match ($itemType) {
                    'Pump' => $this->pumpService,
                    'Fan' => $this->fanService,
                    'Air Compressor' => $this->compressorService,
                    'Chiller' => $this->chillerService,
                    'Motors' => $this->motorService,
                    'Boiler' => $this->boilerService,
                    'Cooling Tower' => $this->coolingService,
                    'AHU' => $this->ahuService,
                    default => null,
                };

                if ($serviceMethod) {
                    $equipmentData['information_id'] = $information->id;
                    $result = $serviceMethod->storeOrUpdate($equipmentData, null);

                    if (!$result) {
                        throw new \Exception("Failed to save {$itemType} data");
                    }
                } else {
                    \Log::warning("No service found for itemType: {$itemType}");
                }
            }

            // Step 4: Process Images (if any)
            if (!empty($data['images']) && is_array($data['images'])) {
                $uploadedImages = [];

                foreach ($data['images'] as $base64Image) {
                    $imageData = $this->processBase64Image($base64Image);

                    if (!$imageData) {
                        continue;
                    }

                    try {
                        $imageName = Str::random(40) . '.' . $imageData['extension'];
                        $storagePath = 'equipment/images/' . date('Y/m/d');
                        $fullPath = $storagePath . '/' . $imageName;

                        // Ensure directory exists
                        Storage::disk('public')->makeDirectory($storagePath);

                        // Store the image
                        $stored = Storage::disk('public')->put($fullPath, $imageData['content']);

                        if ($stored) {
                            $uploadedImages[] = [
                                'information_id' => $information->id,
                                'image' => $fullPath,
                                'created_at' => now(),
                                'updated_at' => now(),
                            ];
                        }
                    } catch (\Exception $e) {
                        \Log::error('Image storage failed: ' . $e->getMessage());
                        continue;
                    }
                }

                if (!empty($uploadedImages)) {
                    Gallery::insert($uploadedImages);
                }
            }

            \DB::commit(); // Commit transaction

            return response()->json([
                'status' => 200,
                'message' => 'Information stored successfully.',
                'data' => $information->load(['pump', 'fan', 'compressor', 'motor', 'chiller', 'gallery'])
            ]);
        } catch (\Exception $e) {
            \DB::rollBack(); // Rollback on failure

            \Log::error('Store Information Failed: ' . $e->getMessage());

            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while saving information.',
                'error' => $e->getMessage()
            ], 500);
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

    protected function processBase64Image(string $base64Image): ?array
    {
        try {
            // Check if the string is a valid base64 image
            if (!preg_match('/^data:image\/(\w+);base64,/', $base64Image, $matches)) {
                \Log::warning('Invalid base64 image format');
                return null;
            }

            $extension = $matches[1];
            $allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

            // Validate image type
            if (!in_array(strtolower($extension), $allowedExtensions)) {
                \Log::warning('Unsupported image type: ' . $extension);
                return null;
            }

            // Remove the data URL part
            $base64String = substr($base64Image, strpos($base64Image, ',') + 1);
            $base64String = str_replace(' ', '+', $base64String);

            // Decode the image
            $imageContent = base64_decode($base64String);

            if ($imageContent === false) {
                \Log::warning('Failed to decode base64 image');
                return null;
            }

            // Validate the image content
            if (!getimagesizefromstring($imageContent)) {
                \Log::warning('Invalid image content');
                return null;
            }

            return [
                'extension' => $extension,
                'content' => $imageContent,
                'mime_type' => 'image/' . $extension
            ];

        } catch (\Exception $e) {
            \Log::error('Image processing error: ' . $e->getMessage());
            return null;
        }
    }
}
