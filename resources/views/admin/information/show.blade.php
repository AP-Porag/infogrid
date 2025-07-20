@extends('layouts.master')

@section('content')
    <div class="container py-4">
        <div class="d-flex justify-content-end pb-4">
            <a href="{{ route('admin.project.show', $item->project->id) }}" class="btn btn-sm btn-dark text-capitalize">
                Back
            </a>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p><strong>SKU:</strong> {{ $item->sku }}</p>
                                        <p><strong>Project:</strong> {{ $item->project->name }}</p>
                                        <p><strong>Item Type:</strong> {{ $item->itemType }}</p>
                                        <p><strong>Created By:</strong> {{ $item->user->first_name.' '.$item->user->last_name }}</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p><strong>Name & Location :</strong> {{ $item->name_location }}</p>
                                        <p><strong>Make & Model:</strong> {{ $item->make_model }}</p>
                                        <p><strong>Created At:</strong> {{ $item->created_at->format('d M Y H:i') }}</p>
                                        <p><strong>Last Updated:</strong> {{ $item->updated_at->format('d M Y H:i') }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h5 class="mt-3">Equipment Specifications</h5>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-hover spec-table">
                                                <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Rated Value</th>
                                                    <th>Measured Value</th>
                                                    <th>UOM</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @if($item->itemType === 'Pump')
                                                    <!-- Pump Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->pump->pumpYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->pump->pumpFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpFlowMeasured ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpFlowUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->pump->pumpHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpHeadMeasured ?? '-' }}</td>
                                                        <td>{{ 'm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->pump->pumpVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpVoltageMeasured ?? '-' }}</td>
                                                        <td>{{ 'V' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->pump->pumpCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpCurrentMeasured ?? '-' }}</td>
                                                        <td>{{ 'A' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->pump->pumpPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpPowerFactorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->pump->pumpMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Frequency</td>
                                                        <td>{{ $item->pump->pumpFrequencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpFrequencyMeasured ?? '-' }}</td>
                                                        <td>{{ 'Hz' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->pump->pumpSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpSpeedMeasured ?? '-' }}</td>
                                                        <td>{{ 'rpm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->pump->pumpMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorFrameSizeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->pump->pumpInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpInsulationClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Head</td>
                                                        <td>{{ $item->pump->pumpSuctionHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpSuctionHeadMeasured ?? '-' }}</td>
                                                        <td>{{ 'm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Head</td>
                                                        <td>{{ $item->pump->pumpDischargeHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpDischargeHeadMeasured ?? '-' }}</td>
                                                        <td>{{ 'm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Efficiency</td>
                                                        <td>{{ $item->pump->pumpEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Fan')
                                                    <!-- Fan Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->fan->fanYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->fan->fanFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanFlowMeasured ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanFlowUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->fan->fanHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanHeadMeasured ?? '-' }}</td>
                                                        <td>{{ 'm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->fan->fanVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanVoltageMeasured ?? '-' }}</td>
                                                        <td>{{ 'V' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->fan->fanCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanCurrentMeasured ?? '-' }}</td>
                                                        <td>{{ 'A' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->fan->fanPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanPowerFactorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->fan->fanMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Frequency</td>
                                                        <td>{{ $item->fan->fanFrequencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanFrequencyMeasured ?? '-' }}</td>
                                                        <td>{{ 'Hz' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->fan->fanSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSpeedMeasured ?? '-' }}</td>
                                                        <td>{{ 'rpm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->fan->fanMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorFrameSizeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->fan->fanInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanInsulationClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Duct Size</td>
                                                        <td>{{ $item->fan->fanSuctionDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionDuctSizeMeasured ?? '-' }}</td>
                                                        <td>{{ 'm2' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Static Pressure</td>
                                                        <td>{{ $item->fan->fanSuctionStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionStaticPressureMeasured ?? '-' }} || Average : {{ $item->fan->fanSuctionStaticPressureAverage ?? '0' }}</td>
                                                        <td>{{ $item->fan->fanSuctionStaticPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Velocity Pressure</td>
                                                        <td>{{ $item->fan->fanSuctionVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionVelocityPressureMeasured ?? '-' }} || Average : {{ $item->fan->fanSuctionVelocityPressureAverage ?? '0' }}</td>
                                                        <td>{{ $item->fan->fanSuctionVelocityPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Duct Size</td>
                                                        <td>{{ $item->fan->fanDischargeDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeDuctSizeMeasured ?? '-' }}</td>
                                                        <td>{{ 'm2' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Static Pressure</td>
                                                        <td>{{ $item->fan->fanDischargeStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeStaticPressureMeasured ?? '-' }} || Average : {{ $item->fan->fanDischargeStaticPressureAverage ?? '0' }}</td>
                                                        <td>{{ $item->fan->fanDischargeStaticPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Velocity Pressure</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityPressureMeasured ?? '-' }} || Average : {{ $item->fan->fanDischargeVelocityPressureAverage ?? '0' }}</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Velocity</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityMeasured ?? '-' }} || Average : {{ $item->fan->fanDischargeVelocityAverage ?? '0' }}</td>
                                                        <td>{{ 'm/s' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fan Efficiency</td>
                                                        <td>{{ $item->fan->fanEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Air Compressor')
                                                    <!-- Air Compressor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->compressor->airCompressorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->compressor->airCompressorFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorFlowMeasured ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorFlowUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'bar' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->compressor->airCompressorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorVoltageMeasured ?? '-' }}</td>
                                                        <td>{{ 'V' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->compressor->airCompressorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorCurrentMeasured ?? '-' }}</td>
                                                        <td>{{ 'A' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->compressor->airCompressorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorPowerFactorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->compressor->airCompressorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorMotorPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Frequency</td>
                                                        <td>{{ $item->compressor->airCompressorFrequencyRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorFrequencyMeasured ?? '-' }}</td>
                                                        <td>{{ 'Hz' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->compressor->airCompressorSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorSpeedMeasured ?? '-' }}</td>
                                                        <td>{{ 'rpm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->compressor->airCompressorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorMotorEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->compressor->airCompressorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->compressor->airCompressorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorMotorFrameSizeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->compressor->airCompressorInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorInsulationClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Load Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorLoadPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'bar' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorUnLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorUnLoadPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'bar' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Receiver Size</td>
                                                        <td>{{ $item->compressor->airCompressorRecieverSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorRecieverSizeMeasured ?? '-' }}</td>
                                                        <td>{{ 'm3' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pipe Volume</td>
                                                        <td>{{ $item->compressor->airCompressorPipeVolumeRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorPipeVolumeMeasured ?? '-' }}</td>
                                                        <td>{{ 'm3' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Initial Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorInitialPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorInitialPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'bar' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Final Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorFinalPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'bar' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Time to Reach Final Pressure</td>
                                                        <td>{{ $item->compressor->airCompressorTimeToReachFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorTimeToReachFinalPressureMeasured ?? '-' }}</td>
                                                        <td>{{ 'Minutes' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Temperature</td>
                                                        <td>{{ $item->compressor->airCompressorTemperatureRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorTemperatureMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Compressor SEC</td>
                                                        <td>{{ $item->compressor->airCompressorCompressorSECRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorCompressorSECMeasured ?? '-' }}</td>
                                                        <td>{{ 'kW/CFM' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dryer type</td>
                                                        <td>{{ $item->compressor->airCompressorDryerTypeRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorDryerTypeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dryer make and model</td>
                                                        <td>{{ $item->compressor->airCompressorDryerMakeModelRated ?? '-' }}</td>
                                                        <td>{{ $item->compressor->airCompressorDryerMakeModelMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Chiller')
                                                    <!-- Chiller Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->chiller->chillerYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of chiller</td>
                                                        <td>{{ $item->chiller->chillerTypeOfChillerRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerTypeOfChillerMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nos. of Compressor</td>
                                                        <td>{{ $item->chiller->chillerNosOfCompressorRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerNosOfCompressorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->chiller->chillerCapacityRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCapacityMeasured ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCapacityUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->chiller->chillerVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerVoltageMeasured ?? '-' }}</td>
                                                        <td>{{ 'V' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->chiller->chillerCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCurrentMeasured ?? '-' }}</td>
                                                        <td>{{ 'A' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->chiller->chillerPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerPowerFactorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Frequency</td>
                                                        <td>{{ $item->chiller->chillerFrequencyRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerFrequencyMeasured ?? '-' }}</td>
                                                        <td>{{ 'Hz' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->chiller->chillerSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerSpeedMeasured ?? '-' }}</td>
                                                        <td>{{ 'rpm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->chiller->chillerMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->chiller->chillerMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorFrameSizeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chiller Loading</td>
                                                        <td>{{ $item->chiller->chillerChillerLoadingRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerChillerLoadingMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Supply Temp</td>
                                                        <td>{{ $item->chiller->chillerSupplyTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerSupplyTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Return Temp</td>
                                                        <td>{{ $item->chiller->chillerReturnTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerReturnTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->chiller->chillerFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerFlowMeasured ?? '-' }} || Average : {{ $item->chiller->chillerFlowMeasuredAverage ?? '0' }}</td>
                                                        <td>{{ $item->chiller->chillerFlowUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chiller SEC</td>
                                                        <td>{{ $item->chiller->chillerChillerSECRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerChillerSECMeasured ?? '-' }}</td>
                                                        <td>{{ 'kW/TR' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Condenser Approach</td>
                                                        <td>{{ $item->chiller->chillerCondenserApprochRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCondenserApprochMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Motor')
                                                    <!-- Motor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->motor->motorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
{{--                                                    <tr>--}}
{{--                                                        <td>Name of Equipment</td>--}}
{{--                                                        <td>{{ $item->motor->motorNameOfEquipmentRated ?? '-' }}</td>--}}
{{--                                                        <td>{{ $item->motor->motorNameOfEquipmentMeasured ?? '-' }}</td>--}}
{{--                                                    </tr>--}}
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->motor->motorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorVoltageMeasured ?? '-' }}</td>
                                                        <td>{{ 'V' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->motor->motorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorCurrentMeasured ?? '-' }}</td>
                                                        <td>{{ 'A' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->motor->motorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorPowerFactorMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Frequency</td>
                                                        <td>{{ $item->motor->motorFrequencyRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorFrequencyMeasured ?? '-' }}</td>
                                                        <td>{{ 'Hz' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->motor->motorSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorSpeedMeasured ?? '-' }}</td>
                                                        <td>{{ 'rpm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Temp.</td>
                                                        <td>{{ $item->motor->motorTempRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->motor->motorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->motor->motorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorFrameSizeMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                @elseif($item->itemType === 'Boiler')
                                                    <!-- Boiler Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->boiler->boilerYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of boiler</td>
                                                        <td>{{ $item->boiler->boilerTypeOfBoilerRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->boiler->boilerCapacityRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerCapacityUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of fuel</td>
                                                        <td>{{ $item->boiler->boilerTypeOfFuelRated ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerTypeOfFuelMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of burner</td>
                                                        <td>{{ $item->boiler->boilerTypeOfBurnerRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Average Quantity of Fuel Fired in a day</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAverageQuantityOfFuelFiredInADayMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAverageQuantityOfFuelFiredInADayUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ash</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAshMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Moisture</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerMoistureMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Carbon</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerCarbonMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hydrogen</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerHydrogenMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nitrogen</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerNitrogenMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Oxygen</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerOxygenMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sulphur</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerSulphurMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gross Calorific value of Fuel</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGrossCalorificValueOfFuelMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGrossCalorificValueOfFuelUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Net Calorific value of Fuel</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerNetCalorificValueOfFuelMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerNetCalorificValueOfFuelUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flue gas Analysis CO2</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerFlueGasAnalysisCO2Measured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flue gas Analysis CO</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerFlueGasAnalysisCOMeasured ?? '-' }}</td>
                                                        <td>{{ 'ppm' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flue gas Analysis Oxygen</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerFlueGasAnalysisOxygenMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flue Gas Temperature</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerFlueGasTemperatureMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ambient Temperature</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAmbientTemperatureMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Humidity in Air / Kg of Dry Air</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerHumidityInAirKgOfDryAirMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerHumidityInAirKgOfDryAirUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Surface Area of Boiler</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerTotalSurfaceAreaOfBoilerMeasured ?? '-' }}</td>
                                                        <td>{{ 'm2' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Velocity of Wind Around the Boiler</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerVelocityOfWindAroundTheBoilerMeasured ?? '-' }}</td>
                                                        <td>{{ 'm/s' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Average Surface Temperature</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAverageSurfaceTemperatureMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Average Quantity of Fuel Fired per hour</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAverageQuantityOfFuelFiredPerHourMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerAverageQuantityOfFuelFiredPerHourUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>GCV of Fly-Ash</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGCVOfFlyAshMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGCVOfFlyAshUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>% of Fly-Ash / kg of Fuel</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerFlyAshKgOfFuelMeasured ?? '-' }}</td>
                                                        <td>{{ '%' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>GCV of Bottom-Ash</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGCVOfBottomAshMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerGCVOfBottomAshUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Operating Temp.</td>
                                                        <td>{{ $item->boiler->boilerOperatingTempRated ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerOperatingTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Operating Pressure</td>
                                                        <td>{{ $item->boiler->boilerOperatingPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerOperatingPressureMeasured ?? '-' }}</td>
                                                        <td>{{ $item->boiler->boilerOperatingPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                @elseif($item->itemType === 'Cooling Tower')
                                                    <!-- Cooling Tower Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->cooling->coolingYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->cooling->coolingCapacityRated ?? '-' }}</td>
                                                        <td>{{ $item->cooling->coolingCapacityMeasured ?? '-' }}</td>
                                                        <td>{{ $item->cooling->coolingCapacityUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of cooling tower</td>
                                                        <td>{{ $item->cooling->coolingTypeOfCoolingTowerRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering Water temp.</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingEnteringWaterTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving Water temp.</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingLeavingWaterTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fan Power</td>
                                                        <td>{{ $item->cooling->coolingFanPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->cooling->coolingFanPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Number of cells </td>
                                                        <td>{{ $item->cooling->coolingNumberOfCellsRated ?? '-' }}</td>
                                                        <td>{{ $item->cooling->coolingNumberOfCellsMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering air temp. (DBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingEnteringAirTempDBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering air temp. (WBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingEnteringAirTempWBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving air temp. (DBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingLeavingAirTempDBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving air temp. (WBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingLeavingAirTempWBTMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow of water</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingFlowOfWaterMeasured ?? '-' }}</td>
                                                        <td>{{ $item->cooling->coolingFlowOfWaterUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Air velocity</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingAirVelocityMeasured ?? '-' }} || Average : {{ $item->cooling->coolingAirVelocityMeasuredAverage ?? '0' }}</td>
                                                        <td>{{ 'ms' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Area of fan of CT</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->cooling->coolingAreaOfFanOfCTMeasured ?? '-' }}</td>
                                                        <td>{{ 'm2' }}</td>
                                                    </tr>
                                                @elseif($item->itemType === 'AHU')
                                                    <!-- AHU Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->ahu->ahuYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->ahu->ahuCapacityRated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuCapacityMeasured ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuCapacityUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type of AHU</td>
                                                        <td>{{ $item->ahu->ahuTypeOfAHURated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->motorYearOfInstallationMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering Water temp.</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuEnteringWaterTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving Water temp.</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuLeavingWaterTempMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fan Power</td>
                                                        <td>{{ $item->ahu->ahuFanPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuFanPowerMeasured ?? '-' }}</td>
                                                        <td>{{ 'KW' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Number of cells </td>
                                                        <td>{{ $item->ahu->ahuNumberOfCellsRated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuNumberOfCellsMeasured ?? '-' }}</td>
                                                        <td>{{ '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering air temp. (DBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuEnteringAirTempDBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Entering air temp. (WBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuEnteringAirTempWBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving air temp. (DBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuLeavingAirTempDBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Leaving air temp. (WBT)</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuLeavingAirTempWBTMeasured ?? '-' }}</td>
                                                        <td>{{ 'C' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow of water</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuFlowOfWaterMeasured ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuFlowOfWaterUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Air velocity</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuAirVelocityMeasured ?? '-' }} || Average : {{ $item->ahu->ahuAirVelocityMeasuredAverage ?? '0' }}</td>
                                                        <td>{{ 'm/s' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Area of duct</td>
                                                        <td>{{ '-' }}</td>
                                                        <td>{{ $item->ahu->ahuAirAreaOfDuctMeasured ?? '-' }}</td>
                                                        <td>{{ 'm2' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Static pressure</td>
                                                        <td>{{ $item->ahu->ahuStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuStaticPressureMeasured ?? '-' }} || Average : {{ $item->ahu->ahuStaticPressureMeasuredAverage ?? '0' }}</td>
                                                        <td>{{ $item->ahu->ahuStaticPressureUnit ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>AHU DP</td>
                                                        <td>{{ $item->ahu->ahuAHUDPRated ?? '-' }}</td>
                                                        <td>{{ $item->ahu->ahuAHUDPMeasured ?? '-' }} || Average : {{ $item->ahu->ahuAHUDPMeasuredAverage ?? '0' }}</td>
                                                        <td>{{ $item->ahu->ahuAHUDPUnit ?? '-' }}</td>
                                                    </tr>
                                                @endif
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @if($item->itemType === 'Air Compressor')
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mt-3">Compressed air leakage test</h5>
                                    <div class="table-responsive">
                                        <table class="table table-striped table-hover spec-table">
                                            <thead>
                                            <tr>
                                                <th>Leakage test</th>
                                                <th>Reading One</th>
                                                <th>Reading Two</th>
                                                <th>Reading Three</th>
                                                <th>UOM</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Load time</td>
                                                <td>{{ $item->compressor->airCompressorLoadTimeReadingOne ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorLoadTimeReadingTwo ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorLoadTimeReadingThree ?? '-' }}</td>
                                                <td>{{ 'Second' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Unload time</td>
                                                <td>{{ $item->compressor->airCompressorUnLoadTimeReadingOne ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorUnLoadTimeReadingTwo ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorUnLoadTimeReadingThree ?? '-' }}</td>
                                                <td>{{ 'Second' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Leakage %</td>
                                                <td>{{ $item->compressor->airCompressorLeakageReadingOne ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorLeakageReadingTwo ?? '-' }}</td>
                                                <td>{{ $item->compressor->airCompressorLeakageReadingThree ?? '-' }}</td>
                                                <td>{{ '%' }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <p><strong>Observations:</strong></p>
                                <p>{{ $item->observations ?? 'No observations recorded' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    @foreach($item->gallery as $image)
                                        <div class="col-md-6" style="margin-bottom: 7px;">
                                            <img src="{{ asset('storage/' . $image->image) }}"
                                                 alt="Product image"
                                                 style="height: 180px; width: 180px; object-fit: cover; border-radius: 10px;">
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="col-md-12">
                                <h5 class="mt-3">Checklist</h5>
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>Check Item</th>
                                            <th>Value/Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @if($item->itemType === 'Pump')
                                            <!-- Pump Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->pump->pumpVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting in Hz</td>
                                                <td>{{ $item->pump->pumpVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Pump Throttling</td>
                                                <td>{{ $item->pump->pumpThrottling ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Flow Modulation Required</td>
                                                <td>{{ $item->pump->pumpFlowModulationRequired ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Parallel Pump Operation</td>
                                                <td>{{ $item->pump->pumpParallelPumpOperation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->pump->pumpNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Cavitation</td>
                                                <td>{{ $item->pump->pumpCheckCavitation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours in day</td>
                                                <td>{{ $item->pump->pumpOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Fan')
                                            <!-- Fan Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->fan->fanVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD Setting</td>
                                                <td>{{ $item->fan->fanVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>DamperOpening</td>
                                                <td>{{ $item->fan->fanOpening ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Flow Modulation Required</td>
                                                <td>{{ $item->fan->fanFlowModulationRequired ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Parallel Fan Operation</td>
                                                <td>{{ $item->fan->fanParallelFanOperation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Nos. of Rewinding of Motor</td>
                                                <td>{{ $item->fan->fanNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->fan->fanOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Air Compressor')
                                            <!-- Air Compressor Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->compressor->airCompressorVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD Setting</td>
                                                <td>{{ $item->compressor->airCompressorVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->compressor->airCompressorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Required Pressure</td>
                                                <td>{{ $item->compressor->airCompressorCheckRequiredpressure ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Pressure Drop</td>
                                                <td>{{ $item->compressor->airCompressorCheckPressureDrop ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check end use point pressure</td>
                                                <td>{{ $item->compressor->airCompressorCheckEndUsePointPressure ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check inlet air filter DP</td>
                                                <td>{{ $item->compressor->airCompressorCheckInletAirFilterDp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check load time</td>
                                                <td>{{ $item->compressor->airCompressorCheckLoadTime ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check unload time</td>
                                                <td>{{ $item->compressor->airCompressorCheckUnLoadTime ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Load hours</td>
                                                <td>{{ $item->compressor->airCompressorCheckLoadHours ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Run hours</td>
                                                <td>{{ $item->compressor->airCompressorCheckRunHours ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Ambient Temp.</td>
                                                <td>{{ $item->compressor->airCompressorCheckAmbientTemp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->compressor->airCompressorOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Chiller')
                                            <!-- Chiller Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->chiller->chillerVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->chiller->chillerVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check set temp. in C</td>
                                                <td>{{ $item->chiller->chillerSetTemp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Condenser Condition</td>
                                                <td>{{ $item->chiller->chillerCheckCondenserCondition ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Take chiller HMI data</td>
                                                <td>{{ $item->chiller->chillerTakeChillerHMIData ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->chiller->chillerOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Motor')
                                            <!-- Motor Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->motor->motorVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->motor->motorVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Per Phase Current</td>
                                                <td>{{ $item->motor->motorCheckPerPhaseCurrent ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Phasor</td>
                                                <td>{{ $item->motor->motorCheckPhasor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Nos. of Rewinding of Motor</td>
                                                <td>{{ $item->motor->motorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->motor->motorOperatingHours ?? '-' }}</td>
                                            </tr>
                                        @elseif($item->itemType === 'Boiler')
                                            <!-- Boiler Checklist -->
                                            <tr>
                                                <td>VFD on ID Fan</td>
                                                <td>{{ $item->boiler->boilerVFDOnIdFan ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->boiler->boilerVFDOnIdFanVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD on FD Fan</td>
                                                <td>{{ $item->boiler->boilerVFDOnFdFan ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->boiler->boilerVFDOnFdFanVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Maximum temp. can sustain</td>
                                                <td>{{ $item->boiler->boilerMaximumTempCanSustain ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Alternate fuel possibility</td>
                                                <td>{{ $item->boiler->boilerAlternateFuelPossibility ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Blow down control</td>
                                                <td>{{ $item->boiler->boilerBlowDownControl ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Collect Feed water test report</td>
                                                <td>{{ $item->boiler->boilerCollectFeedWaterTestReport ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Blow down water TDS value</td>
                                                <td>{{ $item->boiler->boilerBlowDownWaterTDSvalue ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Waste heat recovery </td>
                                                <td>{{ $item->boiler->boilerWasteHeatRecovery ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Burner air max. temp. capacity</td>
                                                <td>{{ $item->boiler->boilerBurnerAirMaxTempCapacity ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check steam traps</td>
                                                <td>{{ $item->boiler->boilerCheckSteamTraps ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Flue gas monitoring</td>
                                                <td>{{ $item->boiler->boilerFlueGasMonitoring ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Online monitoring & control</td>
                                                <td>{{ $item->boiler->boilerOnlineMonitoringControl ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Water/steam Flow meter reading</td>
                                                <td>{{ $item->boiler->boilerWaterSteamFlowMeterReading ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Fuel Flow meter reading</td>
                                                <td>{{ $item->boiler->boilerFuelFlowMeterReading ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->boiler->boilerOperatingHours ?? '-' }}</td>
                                            </tr>
                                        @elseif($item->itemType === 'Cooling Tower')
                                            <!-- Cooling Tower Checklist -->
                                            <tr>
                                                <td>VFD on fan or not</td>
                                                <td>{{ $item->cooling->coolingVFDOnFanOrNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->cooling->coolingVFDSettingFan ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD on pump or not</td>
                                                <td>{{ $item->cooling->coolingVFDOnPumpOrNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->cooling->coolingVFDSettingPump ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Drift loss visible</td>
                                                <td>{{ $item->cooling->coolingDriftLossVisible ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Nos. of rewinding of fan motor</td>
                                                <td>{{ $item->cooling->coolingNosOfRewidingOfFanMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->cooling->coolingOperatingHours ?? '-' }}</td>
                                            </tr>
                                        @elseif($item->itemType === 'AHU')
                                            <!-- AHU Checklist -->
                                            <tr>
                                                <td>VFD on fan or not</td>
                                                <td>{{ $item->ahu->ahuVFDOnFanOrNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting</td>
                                                <td>{{ $item->ahu->ahuVFDSettingFan ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Damper position</td>
                                                <td>{{ $item->ahu->ahuDamperPosition ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Connected with BMS</td>
                                                <td>{{ $item->ahu->ahuConnectedWithBMS ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Modulating valve is 2 way or 3 way</td>
                                                <td>{{ $item->ahu->ahuModulatingValve ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Set Temp.</td>
                                                <td>{{ $item->ahu->ahuSetTemp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->ahu->ahuOperatingHours ?? '-' }}</td>
                                            </tr>
                                        @endif
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('style')
    <style>
        .data-card {
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .header-section {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }
        .table-responsive {
            max-height: 500px;
            overflow-y: auto;
        }
        .table th {
            position: sticky;
            top: 0;
            background-color: white;
        }
        .spec-table th, .spec-table td {
            vertical-align: middle;
        }
    </style>
@endpush
@push('script')

@endpush
