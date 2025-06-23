<?php

namespace App\Http\Controllers\Admin\Project;

use App\DataTables\InformationDataTable;
use App\DataTables\ProjectDataTable;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Services\ProjectService;
use Illuminate\Http\Request;

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
        return back();
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
}
