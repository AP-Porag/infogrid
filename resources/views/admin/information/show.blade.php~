@extends('layouts.master')

@section('content')
    <div class="container py-4">
        <div class="d-flex justify-content-end py-4">
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
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @if($item->itemType === 'Pump')
                                                    <!-- Pump Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->pump->pumpYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->pump->pumpFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->pump->pumpHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->pump->pumpVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->pump->pumpCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->pump->pumpPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->pump->pumpMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->pump->pumpSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpSpeedMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->pump->pumpMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->pump->pumpInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Head</td>
                                                        <td>{{ $item->pump->pumpSuctionHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpSuctionHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Head</td>
                                                        <td>{{ $item->pump->pumpDischargeHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpDischargeHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Efficiency</td>
                                                        <td>{{ $item->pump->pumpEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pump->pumpEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Fan')
                                                    <!-- Fan Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->fan->fanYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->fan->fanFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->fan->fanHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->fan->fanVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->fan->fanCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->fan->fanPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->fan->fanMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->fan->fanMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->fan->fanInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Duct Size</td>
                                                        <td>{{ $item->fan->fanSuctionDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionDuctSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Static Pressure</td>
                                                        <td>{{ $item->fan->fanSuctionStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionStaticPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Velocity Pressure</td>
                                                        <td>{{ $item->fan->fanSuctionVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanSuctionVelocityPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Duct Size</td>
                                                        <td>{{ $item->fan->fanDischargeDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeDuctSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Static Pressure</td>
                                                        <td>{{ $item->fan->fanDischargeStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeStaticPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Velocity Pressure</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanDischargeVelocityPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Efficiency</td>
                                                        <td>{{ $item->fan->fanEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fan->fanEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Air Compressor')
                                                    <!-- Air Compressor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->Compressor->airCompressorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->Compressor->airCompressorFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->Compressor->airCompressorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->Compressor->airCompressorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->Compressor->airCompressorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->Compressor->airCompressorInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Load Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorLoadPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorUnLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorUnLoadPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Receiver Size</td>
                                                        <td>{{ $item->Compressor->airCompressorRecieverSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorRecieverSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Initial Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorInitialPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorInitialPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Final Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorFinalPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Time to Reach Final Pressure</td>
                                                        <td>{{ $item->Compressor->airCompressorTimeToReachFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorTimeToReachFinalPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Temperature</td>
                                                        <td>{{ $item->Compressor->airCompressorTemperatureRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorTemperatureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Compressor SEC</td>
                                                        <td>{{ $item->Compressor->airCompressorCompressorSECRated ?? '-' }}</td>
                                                        <td>{{ $item->Compressor->airCompressorCompressorSECMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <!-- Leakage Test -->
                                                    <tr>
                                                        <td>Load Time Reading One</td>
                                                        <td colspan="2">{{ $item->Compressor->airCompressorLoadTimeReadingOne ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Load Time Reading Two</td>
                                                        <td colspan="2">{{ $item->Compressor->airCompressorLoadTimeReadingTwo ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Time Reading One</td>
                                                        <td colspan="2">{{ $item->Compressor->airCompressorUnLoadTimeReadingOne ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Time Reading Two</td>
                                                        <td colspan="2">{{ $item->Compressor->airCompressorUnLoadTimeReadingTwo ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Chiller')
                                                    <!-- Chiller Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->chiller->chillerYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->chiller->chillerCapacityRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCapacityMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->chiller->chillerVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->chiller->chillerCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->chiller->chillerPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->chiller->chillerMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->chiller->chillerMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Supply Temp</td>
                                                        <td>{{ $item->chiller->chillerSupplyTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerSupplyTempMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Return Temp</td>
                                                        <td>{{ $item->chiller->chillerReturnTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerReturnTempMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->chiller->chillerFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chiller SEC</td>
                                                        <td>{{ $item->chiller->chillerChillerSECRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerChillerSECMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Condenser Approach</td>
                                                        <td>{{ $item->chiller->chillerCondenserApprochRated ?? '-' }}</td>
                                                        <td>{{ $item->chiller->chillerCondenserApprochMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Motor')
                                                    <!-- Motor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->motor->motorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Name of Equipment</td>
                                                        <td>{{ $item->motor->motorNameOfEquipmentRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorNameOfEquipmentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->motor->motorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->motor->motorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->motor->motorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->motor->motorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->motor->motorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->motor->motorMotorFrameSizeMeasured ?? '-' }}</td>
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
                                        <div class="col-md-6 mb-4">
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
                                                <td>Throttling</td>
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
                                                <td>Opening</td>
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
                                                <td>No. of Rewinding of Motor</td>
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
                                                <td>{{ $item->Compressor->airCompressorVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->Compressor->airCompressorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Required Pressure</td>
                                                <td>{{ $item->Compressor->airCompressorCheckRequiredpressure ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Pressure Drop</td>
                                                <td>{{ $item->Compressor->airCompressorCheckPressureDrop ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->Compressor->airCompressorOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Chiller')
                                            <!-- Chiller Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->chiller->chillerVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Set Temp</td>
                                                <td>{{ $item->chiller->chillerSetTemp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Condenser Condition</td>
                                                <td>{{ $item->chiller->chillerCheckCondenserCondition ?? '-' }}</td>
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
                                                <td>Check Per Phase Current</td>
                                                <td>{{ $item->motor->motorCheckPerPhaseCurrent ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Phasor</td>
                                                <td>{{ $item->motor->motorCheckPhasor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->motor->motorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->motor->motorOperatingHours ?? '-' }}</td>
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
