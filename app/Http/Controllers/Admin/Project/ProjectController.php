<?php

namespace App\Http\Controllers\Admin\Project;

use App\DataTables\InformationDataTable;
use App\DataTables\ProjectDataTable;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Information;
use App\Models\Project;
use App\Models\User;
use App\Services\ProjectService;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    protected $projectService;

    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    public function index(ProjectDataTable $dataTable)
    {
        set_page_meta('Project');
        return $dataTable->render('admin.project.index');
    }

    public function create()
    {
        set_page_meta('Create Project');
        return view('admin.project.create');
    }

    public function store(ProjectRequest $request)
    {

        $data = $request->validated();
        try {
            $this->projectService->storeOrUpdate($data, null);
            record_created_flash();
        } catch (\Exception $e) {
        }
        return redirect()->route('admin.project.index');
    }

    public function show($id,InformationDataTable $dataTable)
    {
        set_page_meta('Information');
        $project = $this->projectService->get($id);
        return $dataTable->with('project_id', $id)->render('admin.information.index',compact('project'));
    }

    public function edit($id)
    {
        try {
            set_page_meta('Edit Project');
            $item = $this->projectService->get($id);
            return view('admin.project.edit', compact('item'));
        } catch (\Exception $e) {
            log_error($e);
        }
        return back();
    }

    public function update(ProjectRequest $request, $id)
    {
        $data = $request->validated();
        try {
            $this->projectService->storeOrUpdate($data, $id);
            record_updated_flash();
            return redirect()->route('admin.project.index');
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
            $this->projectService->delete($id);
            record_deleted_flash();
            return back();
        } catch (\Exception $e) {
            return back();
        }
    }

    public function allProjects()
    {
        return Project::select('id', 'name')->get();
    }

    public function userContributions($id)
    {
        $totalRecords = Information::where('project_id', $id)->count();

        $users = User::whereHas('informations', function($q) use ($id) {
            $q->where('project_id', $id);
        })->withCount([
            'informations as contribution_count' => function ($query) use ($id) {
                $query->where('project_id', $id);
            }
        ])->get();

        foreach ($users as $user) {
            $user->percentage = $totalRecords > 0
                ? round(($user->contribution_count / $totalRecords) * 100, 2)
                : 0;
        }

        return response()->json([
            'users' => $users,
            'totalRecords' => $totalRecords
        ]);
    }
    public function allContributions()
    {
        $totalRecords = Information::count();

        $users = User::whereHas('informations')
            ->withCount('informations')
            ->get();

        foreach ($users as $user) {
            $user->percentage = $totalRecords > 0
                ? round(($user->informations_count / $totalRecords) * 100, 2)
                : 0;
            $user->contribution_count = $user->informations_count;
            unset($user->informations_count);
        }

        return response()->json([
            'users' => $users,
            'totalRecords' => $totalRecords,
        ]);
    }

    public function userProjectContribution(Request $request)
    {
        $user = Auth::user();

        // Get all projects where user contributed data
        $projects = Project::whereHas('information', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->withCount(['information as contribution_count' => function ($query) use ($user) {
            $query->where('user_id', $user->id);
        }])->get();

        // Total records by all users per project for percentage
        foreach ($projects as $project) {
            $total = Information::where('project_id', $project->id)->count();
            $userCount = $project->contribution_count;
            $project->total_entries = $total;
            $project->percentage = $total > 0 ? round(($userCount / $total) * 100, 2) : 0;
        }

        return response()->json([
            'projects' => $projects
        ]);
    }

    public function dailyUserContributions(Request $request)
    {
        $projectId = $request->project_id;
        $threeMonthsAgo = Carbon::now()->subMonths(3)->startOfDay();

        // Query for detailed grouped data
        $query = Information::with('user')
            ->whereDate('created_at', '>=', $threeMonthsAgo)
            ->selectRaw('DATE(created_at) as date, user_id, COUNT(*) as count')
            ->groupBy('date', 'user_id');

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        $entries = $query->get()->groupBy('user_id');

        // New query for total count (no grouping)
        $totalCountQuery = Information::whereDate('created_at', '>=', $threeMonthsAgo);
        if ($projectId) {
            $totalCountQuery->where('project_id', $projectId);
        }
        $totalEntries = $totalCountQuery->count(); // Correct way

        $labels = [];
        $datasets = [];

        foreach ($entries as $userId => $data) {
            $user = $data->first()->user;

            $userData = [];
            foreach ($data as $row) {
//                $date = Carbon::parse($row->date)->format('Y-m-d');
                $date = Carbon::parse($row->date)->format('d-m-Y');
                $labels[$date] = true;
                $userData[$date] = $row->count;
            }

            $datasets[] = [
                'label' => $user->first_name . ' ' . $user->last_name,
                'data' => $userData,
                'fill' => false,
                'borderColor' => $this->randomColor(),
                'lineTension' => 0.1
            ];
        }

        $dates = array_keys($labels);
        sort($dates);

        foreach ($datasets as &$dataset) {
            $normalized = [];
            foreach ($dates as $date) {
                $normalized[] = $dataset['data'][$date] ?? 0;
            }
            $dataset['data'] = $normalized;
        }

        return response()->json([
            'labels' => $dates,
            'datasets' => $datasets,
            'totalEntries' => $totalEntries
        ]);
    }

    private function randomColor()
    {
        return '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6);
    }

    public function userContributionsEntries(Request $request)
    {
        $user = Auth::user();
        $projectId = $request->query('project_id');
        $threeMonthsAgo = Carbon::now()->subMonths(3)->startOfDay();

        $query = Information::query()
            ->where('user_id', $user->id)
            ->whereDate('created_at', '>=', $threeMonthsAgo);

        if ($projectId) {
            $query->where('project_id', $projectId);
        }

        // Get daily counts grouped by date
        $entries = $query
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Prepare labels for last 3 months (all dates)
        $labels = [];
        $period = new \DatePeriod(
            new \DateTime($threeMonthsAgo),
            new \DateInterval('P1D'),
            new \DateTime(now()->addDay()) // include today
        );
        foreach ($period as $date) {
//            $labels[] = $date->format('Y-m-d');
            $labels[] = $date->format('d-m-Y');
        }

        // Map counts by date
        $countsByDate = $entries->keyBy('date')->map(fn($item) => $item->count)->toArray();

        // Fill data array aligned with labels
        $data = [];
        foreach ($labels as $label) {
            $data[] = $countsByDate[$label] ?? 0;
        }

        $totalEntries = array_sum($data);

        $chartData = [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => $user->first_name . ' ' . $user->last_name,
                    'data' => $data,
                ]
            ]
        ];

        return response()->json([
            'chartData' => $chartData,
            'totalEntries' => $totalEntries,
        ]);
    }
}
