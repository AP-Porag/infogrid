@extends('layouts.master')

@section('content')
    <div class="container py-4">
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
                                                        <td>{{ $item->pumpYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->pumpFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->pumpHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->pumpVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->pumpCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->pumpPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->pumpMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed</td>
                                                        <td>{{ $item->pumpSpeedRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpSpeedMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->pumpMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->pumpMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->pumpMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->pumpInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Head</td>
                                                        <td>{{ $item->pumpSuctionHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpSuctionHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Head</td>
                                                        <td>{{ $item->pumpDischargeHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpDischargeHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Efficiency</td>
                                                        <td>{{ $item->pumpEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->pumpEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Fan')
                                                    <!-- Fan Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->fanYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->fanYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->fanFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->fanFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Head</td>
                                                        <td>{{ $item->fanHeadRated ?? '-' }}</td>
                                                        <td>{{ $item->fanHeadMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->fanVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->fanVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->fanCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->fanCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->fanPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->fanPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->fanMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->fanMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->fanMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fanMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->fanMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fanMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->fanMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fanMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->fanInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->fanInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Duct Size</td>
                                                        <td>{{ $item->fanSuctionDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fanSuctionDuctSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Static Pressure</td>
                                                        <td>{{ $item->fanSuctionStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fanSuctionStaticPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suction Velocity Pressure</td>
                                                        <td>{{ $item->fanSuctionVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fanSuctionVelocityPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Duct Size</td>
                                                        <td>{{ $item->fanDischargeDuctSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->fanDischargeDuctSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Static Pressure</td>
                                                        <td>{{ $item->fanDischargeStaticPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fanDischargeStaticPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discharge Velocity Pressure</td>
                                                        <td>{{ $item->fanDischargeVelocityPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->fanDischargeVelocityPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Efficiency</td>
                                                        <td>{{ $item->fanEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->fanEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Air Compressor')
                                                    <!-- Air Compressor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->airCompressorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->airCompressorFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pressure</td>
                                                        <td>{{ $item->airCompressorPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->airCompressorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->airCompressorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->airCompressorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->airCompressorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->airCompressorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->airCompressorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->airCompressorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Insulation Class</td>
                                                        <td>{{ $item->airCompressorInsulationClassRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorInsulationClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Load Pressure</td>
                                                        <td>{{ $item->airCompressorLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorLoadPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Pressure</td>
                                                        <td>{{ $item->airCompressorUnLoadPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorUnLoadPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Receiver Size</td>
                                                        <td>{{ $item->airCompressorRecieverSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorRecieverSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Initial Pressure</td>
                                                        <td>{{ $item->airCompressorInitialPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorInitialPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Final Pressure</td>
                                                        <td>{{ $item->airCompressorFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorFinalPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Time to Reach Final Pressure</td>
                                                        <td>{{ $item->airCompressorTimeToReachFinalPressureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorTimeToReachFinalPressureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Temperature</td>
                                                        <td>{{ $item->airCompressorTemperatureRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorTemperatureMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Compressor SEC</td>
                                                        <td>{{ $item->airCompressorCompressorSECRated ?? '-' }}</td>
                                                        <td>{{ $item->airCompressorCompressorSECMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <!-- Leakage Test -->
                                                    <tr>
                                                        <td>Load Time Reading One</td>
                                                        <td colspan="2">{{ $item->airCompressorLoadTimeReadingOne ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Load Time Reading Two</td>
                                                        <td colspan="2">{{ $item->airCompressorLoadTimeReadingTwo ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Time Reading One</td>
                                                        <td colspan="2">{{ $item->airCompressorUnLoadTimeReadingOne ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UnLoad Time Reading Two</td>
                                                        <td colspan="2">{{ $item->airCompressorUnLoadTimeReadingTwo ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Chiller')
                                                    <!-- Chiller Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->chillerYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>{{ $item->chillerCapacityRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerCapacityMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->chillerVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->chillerCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->chillerPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->chillerMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->chillerMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->chillerMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->chillerMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerMotorFrameSizeMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Supply Temp</td>
                                                        <td>{{ $item->chillerSupplyTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerSupplyTempMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Return Temp</td>
                                                        <td>{{ $item->chillerReturnTempRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerReturnTempMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Flow</td>
                                                        <td>{{ $item->chillerFlowRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerFlowMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chiller SEC</td>
                                                        <td>{{ $item->chillerChillerSECRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerChillerSECMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Condenser Approach</td>
                                                        <td>{{ $item->chillerCondenserApprochRated ?? '-' }}</td>
                                                        <td>{{ $item->chillerCondenserApprochMeasured ?? '-' }}</td>
                                                    </tr>

                                                @elseif($item->itemType === 'Motor')
                                                    <!-- Motor Specifications -->
                                                    <tr>
                                                        <td>Year of Installation</td>
                                                        <td>{{ $item->motorYearOfInstallationRated ?? '-' }}</td>
                                                        <td>{{ $item->motorYearOfInstallationMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Name of Equipment</td>
                                                        <td>{{ $item->motorNameOfEquipmentRated ?? '-' }}</td>
                                                        <td>{{ $item->motorNameOfEquipmentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Voltage</td>
                                                        <td>{{ $item->motorVoltageRated ?? '-' }}</td>
                                                        <td>{{ $item->motorVoltageMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current</td>
                                                        <td>{{ $item->motorCurrentRated ?? '-' }}</td>
                                                        <td>{{ $item->motorCurrentMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Power Factor</td>
                                                        <td>{{ $item->motorPowerFactorRated ?? '-' }}</td>
                                                        <td>{{ $item->motorPowerFactorMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Power</td>
                                                        <td>{{ $item->motorMotorPowerRated ?? '-' }}</td>
                                                        <td>{{ $item->motorMotorPowerMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency</td>
                                                        <td>{{ $item->motorMotorEfficiencyRated ?? '-' }}</td>
                                                        <td>{{ $item->motorMotorEfficiencyMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Efficiency Class</td>
                                                        <td>{{ $item->motorMotorEfficiencyClassRated ?? '-' }}</td>
                                                        <td>{{ $item->motorMotorEfficiencyClassMeasured ?? '-' }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Motor Frame Size</td>
                                                        <td>{{ $item->motorMotorFrameSizeRated ?? '-' }}</td>
                                                        <td>{{ $item->motorMotorFrameSizeMeasured ?? '-' }}</td>
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
                                                <td>{{ $item->pumpVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD setting in Hz</td>
                                                <td>{{ $item->pumpVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Throttling</td>
                                                <td>{{ $item->pumpThrottling ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Flow Modulation Required</td>
                                                <td>{{ $item->pumpFlowModulationRequired ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Parallel Pump Operation</td>
                                                <td>{{ $item->pumpParallelPumpOperation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->pumpNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Cavitation</td>
                                                <td>{{ $item->pumpCheckCavitation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours in day</td>
                                                <td>{{ $item->pumpOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Fan')
                                            <!-- Fan Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->fanVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>VFD Setting</td>
                                                <td>{{ $item->fanVFDSetting ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Opening</td>
                                                <td>{{ $item->fanOpening ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Flow Modulation Required</td>
                                                <td>{{ $item->fanFlowModulationRequired ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Parallel Fan Operation</td>
                                                <td>{{ $item->fanParallelFanOperation ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->fanNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->fanOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Air Compressor')
                                            <!-- Air Compressor Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->airCompressorVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->airCompressorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Required Pressure</td>
                                                <td>{{ $item->airCompressorCheckRequiredpressure ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Pressure Drop</td>
                                                <td>{{ $item->airCompressorCheckPressureDrop ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->airCompressorOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Chiller')
                                            <!-- Chiller Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->chillerVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Set Temp</td>
                                                <td>{{ $item->chillerSetTemp ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Condenser Condition</td>
                                                <td>{{ $item->chillerCheckCondenserCondition ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->chillerOperatingHours ?? '-' }}</td>
                                            </tr>

                                        @elseif($item->itemType === 'Motor')
                                            <!-- Motor Checklist -->
                                            <tr>
                                                <td>VFD or Not</td>
                                                <td>{{ $item->motorVFDorNot ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Per Phase Current</td>
                                                <td>{{ $item->motorCheckPerPhaseCurrent ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Check Phasor</td>
                                                <td>{{ $item->motorCheckPhasor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Rewinding of Motor</td>
                                                <td>{{ $item->motorNosOfRewidingOfMotor ?? '-' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Operating Hours</td>
                                                <td>{{ $item->motorOperatingHours ?? '-' }}</td>
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

        <!-- Basic Information Card -->
{{--        <div class="card data-card mb-4">--}}
{{--            <div class="card-body">--}}
{{--                <div class="row">--}}
{{--                    <div class="col-md-4">--}}
{{--                        <div class="mb-3">--}}
{{--                            <img src="{{ $item->image ?? asset('default.png') }}"--}}
{{--                                 alt="Equipment Image"--}}
{{--                                 class="img-fluid rounded">--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-md-8">--}}
{{--                        <div class="row">--}}
{{--                            <div class="col-md-6">--}}
{{--                                <p><strong>SKU:</strong> {{ $item->sku }}</p>--}}
{{--                                <p><strong>Item Type:</strong> {{ $item->itemType }}</p>--}}
{{--                                <p><strong>Created By:</strong> {{ $item->user->first_name.' '.$item->user->last_name }}</p>--}}
{{--                            </div>--}}
{{--                            <div class="col-md-6">--}}
{{--                                <p><strong>Created At:</strong> {{ $item->created_at->format('d M Y H:i') }}</p>--}}
{{--                                <p><strong>Last Updated:</strong> {{ $item->updated_at->format('d M Y H:i') }}</p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="row">--}}
{{--                            <div class="col-12">--}}
{{--                                <p><strong>Observations:</strong></p>--}}
{{--                                <p>{{ $item->observations ?? 'No observations recorded' }}</p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}

{{--        <!-- Equipment Specifications -->--}}
{{--        <div class="card data-card mb-4">--}}
{{--            <div class="card-header header-section">--}}
{{--                <h4>Equipment Specifications</h4>--}}
{{--            </div>--}}
{{--            <div class="card-body">--}}
{{--                <div class="table-responsive">--}}
{{--                    <table class="table table-striped table-hover spec-table">--}}
{{--                        <thead>--}}
{{--                        <tr>--}}
{{--                            <th>Parameter</th>--}}
{{--                            <th>Rated Value</th>--}}
{{--                            <th>Measured Value</th>--}}
{{--                        </tr>--}}
{{--                        </thead>--}}
{{--                        <tbody>--}}
{{--                        @if($item->itemType === 'Pump')--}}
{{--                            <!-- Pump Specifications -->--}}
{{--                            <tr>--}}
{{--                                <td>Year of Installation</td>--}}
{{--                                <td>{{ $item->pumpYearOfInstallationRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpYearOfInstallationMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow</td>--}}
{{--                                <td>{{ $item->pumpFlowRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpFlowMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Head</td>--}}
{{--                                <td>{{ $item->pumpHeadRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpHeadMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Voltage</td>--}}
{{--                                <td>{{ $item->pumpVoltageRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpVoltageMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Current</td>--}}
{{--                                <td>{{ $item->pumpCurrentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpCurrentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Power Factor</td>--}}
{{--                                <td>{{ $item->pumpPowerFactorRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpPowerFactorMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Power</td>--}}
{{--                                <td>{{ $item->pumpMotorPowerRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpMotorPowerMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency</td>--}}
{{--                                <td>{{ $item->pumpMotorEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpMotorEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency Class</td>--}}
{{--                                <td>{{ $item->pumpMotorEfficiencyClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpMotorEfficiencyClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Frame Size</td>--}}
{{--                                <td>{{ $item->pumpMotorFrameSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpMotorFrameSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Insulation Class</td>--}}
{{--                                <td>{{ $item->pumpInsulationClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpInsulationClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Suction Head</td>--}}
{{--                                <td>{{ $item->pumpSuctionHeadRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpSuctionHeadMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Discharge Head</td>--}}
{{--                                <td>{{ $item->pumpDischargeHeadRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpDischargeHeadMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Efficiency</td>--}}
{{--                                <td>{{ $item->pumpEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->pumpEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Fan')--}}
{{--                            <!-- Fan Specifications -->--}}
{{--                            <tr>--}}
{{--                                <td>Year of Installation</td>--}}
{{--                                <td>{{ $item->fanYearOfInstallationRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanYearOfInstallationMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow</td>--}}
{{--                                <td>{{ $item->fanFlowRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanFlowMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Head</td>--}}
{{--                                <td>{{ $item->fanHeadRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanHeadMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Voltage</td>--}}
{{--                                <td>{{ $item->fanVoltageRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanVoltageMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Current</td>--}}
{{--                                <td>{{ $item->fanCurrentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanCurrentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Power Factor</td>--}}
{{--                                <td>{{ $item->fanPowerFactorRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanPowerFactorMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Power</td>--}}
{{--                                <td>{{ $item->fanMotorPowerRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanMotorPowerMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency</td>--}}
{{--                                <td>{{ $item->fanMotorEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanMotorEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency Class</td>--}}
{{--                                <td>{{ $item->fanMotorEfficiencyClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanMotorEfficiencyClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Frame Size</td>--}}
{{--                                <td>{{ $item->fanMotorFrameSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanMotorFrameSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Insulation Class</td>--}}
{{--                                <td>{{ $item->fanInsulationClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanInsulationClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Suction Duct Size</td>--}}
{{--                                <td>{{ $item->fanSuctionDuctSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanSuctionDuctSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Suction Static Pressure</td>--}}
{{--                                <td>{{ $item->fanSuctionStaticPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanSuctionStaticPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Suction Velocity Pressure</td>--}}
{{--                                <td>{{ $item->fanSuctionVelocityPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanSuctionVelocityPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Discharge Duct Size</td>--}}
{{--                                <td>{{ $item->fanDischargeDuctSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanDischargeDuctSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Discharge Static Pressure</td>--}}
{{--                                <td>{{ $item->fanDischargeStaticPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanDischargeStaticPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Discharge Velocity Pressure</td>--}}
{{--                                <td>{{ $item->fanDischargeVelocityPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanDischargeVelocityPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Efficiency</td>--}}
{{--                                <td>{{ $item->fanEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->fanEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Air Compressor')--}}
{{--                            <!-- Air Compressor Specifications -->--}}
{{--                            <tr>--}}
{{--                                <td>Year of Installation</td>--}}
{{--                                <td>{{ $item->airCompressorYearOfInstallationRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorYearOfInstallationMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow</td>--}}
{{--                                <td>{{ $item->airCompressorFlowRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorFlowMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Voltage</td>--}}
{{--                                <td>{{ $item->airCompressorVoltageRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorVoltageMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Current</td>--}}
{{--                                <td>{{ $item->airCompressorCurrentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorCurrentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Power Factor</td>--}}
{{--                                <td>{{ $item->airCompressorPowerFactorRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorPowerFactorMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Power</td>--}}
{{--                                <td>{{ $item->airCompressorMotorPowerRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorMotorPowerMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency</td>--}}
{{--                                <td>{{ $item->airCompressorMotorEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorMotorEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency Class</td>--}}
{{--                                <td>{{ $item->airCompressorMotorEfficiencyClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorMotorEfficiencyClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Frame Size</td>--}}
{{--                                <td>{{ $item->airCompressorMotorFrameSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorMotorFrameSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Insulation Class</td>--}}
{{--                                <td>{{ $item->airCompressorInsulationClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorInsulationClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Load Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorLoadPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorLoadPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>UnLoad Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorUnLoadPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorUnLoadPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Receiver Size</td>--}}
{{--                                <td>{{ $item->airCompressorRecieverSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorRecieverSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Initial Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorInitialPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorInitialPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Final Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorFinalPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorFinalPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Time to Reach Final Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorTimeToReachFinalPressureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorTimeToReachFinalPressureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Temperature</td>--}}
{{--                                <td>{{ $item->airCompressorTemperatureRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorTemperatureMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Compressor SEC</td>--}}
{{--                                <td>{{ $item->airCompressorCompressorSECRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->airCompressorCompressorSECMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <!-- Leakage Test -->--}}
{{--                            <tr>--}}
{{--                                <td>Load Time Reading One</td>--}}
{{--                                <td colspan="2">{{ $item->airCompressorLoadTimeReadingOne ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Load Time Reading Two</td>--}}
{{--                                <td colspan="2">{{ $item->airCompressorLoadTimeReadingTwo ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>UnLoad Time Reading One</td>--}}
{{--                                <td colspan="2">{{ $item->airCompressorUnLoadTimeReadingOne ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>UnLoad Time Reading Two</td>--}}
{{--                                <td colspan="2">{{ $item->airCompressorUnLoadTimeReadingTwo ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Chiller')--}}
{{--                            <!-- Chiller Specifications -->--}}
{{--                            <tr>--}}
{{--                                <td>Year of Installation</td>--}}
{{--                                <td>{{ $item->chillerYearOfInstallationRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerYearOfInstallationMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Capacity</td>--}}
{{--                                <td>{{ $item->chillerCapacityRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerCapacityMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Voltage</td>--}}
{{--                                <td>{{ $item->chillerVoltageRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerVoltageMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Current</td>--}}
{{--                                <td>{{ $item->chillerCurrentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerCurrentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Power Factor</td>--}}
{{--                                <td>{{ $item->chillerPowerFactorRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerPowerFactorMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Power</td>--}}
{{--                                <td>{{ $item->chillerMotorPowerRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerMotorPowerMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency</td>--}}
{{--                                <td>{{ $item->chillerMotorEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerMotorEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency Class</td>--}}
{{--                                <td>{{ $item->chillerMotorEfficiencyClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerMotorEfficiencyClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Frame Size</td>--}}
{{--                                <td>{{ $item->chillerMotorFrameSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerMotorFrameSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Supply Temp</td>--}}
{{--                                <td>{{ $item->chillerSupplyTempRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerSupplyTempMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Return Temp</td>--}}
{{--                                <td>{{ $item->chillerReturnTempRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerReturnTempMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow</td>--}}
{{--                                <td>{{ $item->chillerFlowRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerFlowMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Chiller SEC</td>--}}
{{--                                <td>{{ $item->chillerChillerSECRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerChillerSECMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Condenser Approach</td>--}}
{{--                                <td>{{ $item->chillerCondenserApprochRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->chillerCondenserApprochMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Motor')--}}
{{--                            <!-- Motor Specifications -->--}}
{{--                            <tr>--}}
{{--                                <td>Year of Installation</td>--}}
{{--                                <td>{{ $item->motorYearOfInstallationRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorYearOfInstallationMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Name of Equipment</td>--}}
{{--                                <td>{{ $item->motorNameOfEquipmentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorNameOfEquipmentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Voltage</td>--}}
{{--                                <td>{{ $item->motorVoltageRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorVoltageMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Current</td>--}}
{{--                                <td>{{ $item->motorCurrentRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorCurrentMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Power Factor</td>--}}
{{--                                <td>{{ $item->motorPowerFactorRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorPowerFactorMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Power</td>--}}
{{--                                <td>{{ $item->motorMotorPowerRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorMotorPowerMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency</td>--}}
{{--                                <td>{{ $item->motorMotorEfficiencyRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorMotorEfficiencyMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Efficiency Class</td>--}}
{{--                                <td>{{ $item->motorMotorEfficiencyClassRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorMotorEfficiencyClassMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Motor Frame Size</td>--}}
{{--                                <td>{{ $item->motorMotorFrameSizeRated ?? '-' }}</td>--}}
{{--                                <td>{{ $item->motorMotorFrameSizeMeasured ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                        @endif--}}
{{--                        </tbody>--}}
{{--                    </table>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}

{{--        <!-- Checklist Section -->--}}
{{--        <div class="card data-card">--}}
{{--            <div class="card-header header-section">--}}
{{--                <h4>Checklist</h4>--}}
{{--            </div>--}}
{{--            <div class="card-body">--}}
{{--                <div class="table-responsive">--}}
{{--                    <table class="table table-striped table-hover">--}}
{{--                        <thead>--}}
{{--                        <tr>--}}
{{--                            <th>Check Item</th>--}}
{{--                            <th>Value/Status</th>--}}
{{--                        </tr>--}}
{{--                        </thead>--}}
{{--                        <tbody>--}}
{{--                        @if($item->itemType === 'Pump')--}}
{{--                            <!-- Pump Checklist -->--}}
{{--                            <tr>--}}
{{--                                <td>VFD or Not</td>--}}
{{--                                <td>{{ $item->pumpVFDorNot ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>VFD Setting</td>--}}
{{--                                <td>{{ $item->pumpVFDSetting ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Throttling</td>--}}
{{--                                <td>{{ $item->pumpThrottling ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow Modulation Required</td>--}}
{{--                                <td>{{ $item->pumpFlowModulationRequired ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Parallel Pump Operation</td>--}}
{{--                                <td>{{ $item->pumpParallelPumpOperation ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>No. of Rewinding of Motor</td>--}}
{{--                                <td>{{ $item->pumpNosOfRewidingOfMotor ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Cavitation</td>--}}
{{--                                <td>{{ $item->pumpCheckCavitation ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Operating Hours</td>--}}
{{--                                <td>{{ $item->pumpOperatingHours ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Fan')--}}
{{--                            <!-- Fan Checklist -->--}}
{{--                            <tr>--}}
{{--                                <td>VFD or Not</td>--}}
{{--                                <td>{{ $item->fanVFDorNot ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>VFD Setting</td>--}}
{{--                                <td>{{ $item->fanVFDSetting ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Opening</td>--}}
{{--                                <td>{{ $item->fanOpening ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Flow Modulation Required</td>--}}
{{--                                <td>{{ $item->fanFlowModulationRequired ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Parallel Fan Operation</td>--}}
{{--                                <td>{{ $item->fanParallelFanOperation ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>No. of Rewinding of Motor</td>--}}
{{--                                <td>{{ $item->fanNosOfRewidingOfMotor ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Operating Hours</td>--}}
{{--                                <td>{{ $item->fanOperatingHours ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Air Compressor')--}}
{{--                            <!-- Air Compressor Checklist -->--}}
{{--                            <tr>--}}
{{--                                <td>VFD or Not</td>--}}
{{--                                <td>{{ $item->airCompressorVFDorNot ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>No. of Rewinding of Motor</td>--}}
{{--                                <td>{{ $item->airCompressorNosOfRewidingOfMotor ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Required Pressure</td>--}}
{{--                                <td>{{ $item->airCompressorCheckRequiredpressure ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Pressure Drop</td>--}}
{{--                                <td>{{ $item->airCompressorCheckPressureDrop ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Operating Hours</td>--}}
{{--                                <td>{{ $item->airCompressorOperatingHours ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Chiller')--}}
{{--                            <!-- Chiller Checklist -->--}}
{{--                            <tr>--}}
{{--                                <td>VFD or Not</td>--}}
{{--                                <td>{{ $item->chillerVFDorNot ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Set Temp</td>--}}
{{--                                <td>{{ $item->chillerSetTemp ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Condenser Condition</td>--}}
{{--                                <td>{{ $item->chillerCheckCondenserCondition ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Operating Hours</td>--}}
{{--                                <td>{{ $item->chillerOperatingHours ?? '-' }}</td>--}}
{{--                            </tr>--}}

{{--                        @elseif($item->itemType === 'Motor')--}}
{{--                            <!-- Motor Checklist -->--}}
{{--                            <tr>--}}
{{--                                <td>VFD or Not</td>--}}
{{--                                <td>{{ $item->motorVFDorNot ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Per Phase Current</td>--}}
{{--                                <td>{{ $item->motorCheckPerPhaseCurrent ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Check Phasor</td>--}}
{{--                                <td>{{ $item->motorCheckPhasor ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>No. of Rewinding of Motor</td>--}}
{{--                                <td>{{ $item->motorNosOfRewidingOfMotor ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                            <tr>--}}
{{--                                <td>Operating Hours</td>--}}
{{--                                <td>{{ $item->motorOperatingHours ?? '-' }}</td>--}}
{{--                            </tr>--}}
{{--                        @endif--}}
{{--                        </tbody>--}}
{{--                    </table>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
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
