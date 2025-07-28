@extends('layouts.master')


@section('content')
    <div class="">
        <div class="">
            <auth-user-project-contribution-line-chart/>
        </div>
        <div class="">
            <user-contribution/>
        </div>
    </div>
@endsection

@push('style')
    @include('includes.styles.datatable')
@endpush

@push('script')
    <!-- Chart JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    {{-- <script src="{{ asset('/admin/js/Chart.bundle.min.js') }}"></script>
    <script src="{{ asset('/admin/js/chartjs.init.js') }}"></script> --}}

    <script>

    </script>
@endpush

