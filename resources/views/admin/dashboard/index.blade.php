@extends('layouts.master')


@section('content')
<div class="">
    <div class="">
        <user-project-contribution-line-chart/>
    </div>

    <div class="">
        <project-contribution/>
    </div>
</div>
@endsection

@push('style')
    @include('includes.styles.datatable')
@endpush

@push('script')
    <!-- Chart JS -->
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>--}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
    {{-- <script src="{{ asset('/admin/js/Chart.bundle.min.js') }}"></script>
    <script src="{{ asset('/admin/js/chartjs.init.js') }}"></script> --}}

    <script>

    </script>
@endpush

