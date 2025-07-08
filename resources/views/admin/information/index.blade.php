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
                            <div class="">
                                @if(auth()->user()->user_type == 'admin')
                                    <button type="button" class="btn btn-dark btn-sm" style="padding-top: 6px;padding-bottom: 6px;margin-right: 15px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Open To Download Excel
                                    </button>
                                @endif
                                <a href="{{route('admin.information.create', ['project_id' => $project->id])}}" class="btn btn-sm btn-primary text-capitalize" style="padding-top: 8px;">Collect New Data</a>
                            </div>
                        @endif
                    </div>
                    {!! $dataTable->table(['class'=>'table-responsive']) !!}
                </div>
            </div>
        </div>

{{--        excel download modal start--}}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Download items in Excel from this Project
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method="POST" action="{{ route('admin.information.export.equipment') }}">
                    <div class="modal-body">
                        @csrf
                        <input type="hidden" name="project_id" value="{{ $project->id }}">
                        <div class="">
                            <select class="form-select" name="itemType" aria-label="Default select example">
                                <option selected="" disabled>Open this select menu to select item</option>
                                <option value="pump">Pump</option>
                                <option value="fan">Fan</option>
                                <option value="compressor">Air Compressor</option>
                                <option value="chiller">Chiller</option>
                                <option value="motor">Motor</option>
                                <option value="boiler">Boiler</option>
                                <option value="cooling">Cooling Tower</option>
                                <option value="ahu">AHU</option>
                            </select>
                            @error('itemType')
                            <p class="error">{{ $message }}</p>
                            @enderror

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Download Excel</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </form>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        {{--        excel download modal end--}}
    </div>

@endsection

@push('style')
    @include('includes.styles.datatable')
@endpush

@push('script')
    @include('includes.scripts.datatable')
@endpush
