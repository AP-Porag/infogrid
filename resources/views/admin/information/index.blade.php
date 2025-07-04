@extends('layouts.master')

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        @if($project)
                            <h4 class="card-title mb-3">Project : {{$project->name}}</h4>
                        @else
                            <h4 class="card-title mb-3">Information</h4>
                        @endif

                        @if($project)
                            <a href="{{route('admin.information.create', ['project_id' => $project->id])}}" class="btn btn-sm btn-primary text-capitalize" style="padding-top: 8px;">Collect New Data</a>
                        @endif
                    </div>
                    {!! $dataTable->table(['class'=>'table-responsive']) !!}
                </div>
            </div>
        </div>
    </div>

@endsection

@push('style')
    @include('includes.styles.datatable')
@endpush

@push('script')
    @include('includes.scripts.datatable')
@endpush
