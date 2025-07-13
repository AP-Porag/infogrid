@extends('layouts.master')

@section('content')
    <div class="row">
        <div class="col-md-10">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between" style="padding-left: 30px;padding-right: 30px;">
                        <h4 class="card-title mb-3">{{get_page_meta('title', true)}}</h4>
                    </div>

                    <edit-information
                        :project_id="{{json_encode($project_id)}}"
                        :information="{{json_encode($information)}}"
                    />
                </div>
            </div>
        </div>

    </div>
@endsection

@push('script')

@endpush
