<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use App\Models\{Pump, Fan, Compressor, Motor, Chiller, Boiler, Cooling, Ahu, Information};

class EquipmentExport implements FromCollection, WithHeadings, WithMapping, WithStyles
{
    protected $itemType;
    protected $projectId;

    public function __construct($itemType, $projectId)
    {
        $this->itemType = strtolower($itemType);
        $this->projectId = $projectId;
    }

    public function collection()
    {
        switch ($this->itemType) {
            case 'pump':
                return Pump::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'fan':
                return Fan::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'compressor':
                return Compressor::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'chiller':
                return Chiller::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'motor':
                return Motor::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'boiler':
                return Boiler::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'cooling':
                return Cooling::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            case 'ahu':
                return Ahu::whereHas('information', function ($q) {
                    $q->where('project_id', $this->projectId);
                })->with('information')->get();

            default:
                return collect();
        }
    }

    public function headings(): array
    {
        switch ($this->itemType) {
            case 'pump':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                    'Flow Rated',
                    'Flow Measured',
                    'UOM',
                    'Head Rated',
                    'Head Measured',
                    'UOM',
                    'Voltage Rated',
                    'Voltage Measured',
                    'UOM',
                    'Current Rated',
                    'Current Measured',
                    'UOM',
                    'Power Factor Rated',
                    'Power Factor Measured',
                    'Motor Power Rated',
                    'Motor Power Measured',
                    'UOM',
                    'Frequency Rated',
                    'Frequency Measured',
                    'UOM',
                    'Speed Rated',
                    'Speed Measured',
                    'UOM',
                    'Motor Efficiency Rated',
                    'UOM',
                    'Motor Efficiency Class Rated',
                    'Motor Frame Size Rated',
                    'Insulation Class Rated',
                    'Suction Head Measured',
                    'UOM',
                    'Discharge Head Measured',
                    'UOM',
                    'Pump Efficiency Rated',
                    'Pump Efficiency Measured',
                    '',
                    'VFD or Not',
                    'VFD setting in Hz',
                    'Pump throttling',
                    'Flow Modulation required',
                    'Parallel pump operation',
                    'Nos. of rewinding of motor',
                    'Check cavitation',
                    'Operating Hours in day',
                    'Observations',
                ];

            case 'fan':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                    'Flow Rated',
                    'Flow Measured',
                    'UOM',
                    'Head Rated',
                    'UOM',
                    'Voltage Rated',
                    'Voltage Measured',
                    'UOM',
                    'Current Rated',
                    'Current Measured',
                    'UOM',
                    'Power Factor Rated',
                    'Power Factor Measured',
                    'Motor Power Rated',
                    'Motor Power Measured',
                    'UOM',
                    'Frequency Rated',
                    'Frequency Measured',
                    'UOM',
                    'Speed Rated',
                    'Speed Measured',
                    'UOM',
                    'Motor Efficiency Rated',
                    'UOM',
                    'Motor Efficiency Class Rated',
                    'Motor Frame Size Rated',
                    'Insulation Class Rated',
                    'Suction Duct Size Measured',
                    'UOM',
                    'Suction Static Pressure Measured',
                    'Suction Static Pressure Average',
                    'UOM',
                    'Suction Velocity pressure Measured',
                    'Suction Velocity pressure Average',
                    'UOM',
                    'Discharge Duct Size Measured',
                    'UOM',
                    'Discharge Static pressure Measured',
                    'Discharge Static pressure Average',
                    'UOM',
                    'Discharge Velocity Pressure Measured',
                    'Discharge Velocity Pressure Average',
                    'UOM',
                    'Discharge Velocity Measured',
                    'Discharge Velocity Average',
                    'UOM',
                    'Fan Efficiency Rated',
                    '',
                    'VFD or Not',
                    'VFD setting',
                    'Damper opening %',
                    'Flow Modulation Required',
                    'Parallel fan operation',
                    'Nos. of rewinding of motor',
                    'Operating Hours',
                    'Observations',
                ];

            case 'compressor':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            case 'chiller':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            case 'motor':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            case 'boiler':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            case 'cooling':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            case 'ahu':
                return [
                    'Project Name',
                    'Equipment',
                    'Location',
                    'Make & Model',
                    'Year Of Installation',
                ];

            default:
                return [];
        }
    }

    public function map($equipment): array
    {
        switch ($this->itemType) {
            case 'pump':
                return [
                    $equipment->information->project->name ?? '',
                    'Pump',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->pumpYearOfInstallationRated,
                    $equipment->pumpFlowRated,
                    $equipment->pumpFlowMeasured,
                    $equipment->pumpFlowUnit,
                    $equipment->pumpHeadRated,
                    $equipment->pumpHeadMeasured,
                    'm',
                    $equipment->pumpVoltageRated,
                    $equipment->pumpVoltageMeasured,
                    'V',
                    $equipment->pumpCurrentRated,
                    $equipment->pumpCurrentMeasured,
                    'A',
                    $equipment->pumpPowerFactorRated,
                    $equipment->pumpPowerFactorMeasured,
                    $equipment->pumpMotorPowerRated,
                    $equipment->pumpMotorPowerMeasured,
                    'kW',
                    $equipment->pumpFrequencyRated,
                    $equipment->pumpFrequencyMeasured,
                    'Hz',
                    $equipment->pumpSpeedRated,
                    $equipment->pumpSpeedMeasured,
                    'rpm',
                    $equipment->pumpMotorEfficiencyRated,
                    '%',
                    $equipment->pumpMotorEfficiencyClassRated,
                    $equipment->pumpMotorFrameSizeRated,
                    $equipment->pumpInsulationClassRated,
                    $equipment->pumpSuctionHeadMeasured,
                    'm',
                    $equipment->pumpDischargeHeadMeasured,
                    'm',
                    $equipment->pumpEfficiencyRated,
                    $equipment->pumpEfficiencyMeasured,
                    '',
                    $equipment->pumpVFD,
                    $equipment->pumpVFDsetting,
                    $equipment->pumpThrottling,
                    $equipment->pumpFlowModulationRequired,
                    $equipment->pumpParallelPumpOperation,
                    $equipment->pumpNosOfRewidingOfMotor,
                    $equipment->pumpCheckCavitation,
                    $equipment->pumpOperatingHours,
                    $equipment->information->observations ?? '',
                ];

            case 'fan':
                return [
                    $equipment->information->project->name ?? '',
                    'Fan',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                    $equipment->fanFlowRated,
                    $equipment->fanFlowMeasured,
                    $equipment->fanFlowUnit,
                    $equipment->fanHeadMeasured,
                    'm',
                    $equipment->fanVoltageRated,
                    $equipment->fanVoltageMeasured,
                    'V',
                    $equipment->fanCurrentRated,
                    $equipment->fanCurrentMeasured,
                    'A',
                    $equipment->fanPowerFactorRated,
                    $equipment->fanPowerFactorMeasured,
                    $equipment->fanMotorPowerRated,
                    $equipment->fanMotorPowerMeasured,
                    'kW',
                    $equipment->fanFrequencyRated,
                    $equipment->fanFrequencyMeasured,
                    'Hz',
                    $equipment->fanSpeedRated,
                    $equipment->fanSpeedMeasured,
                    'rpm',
                    $equipment->fanMotorEfficiencyRated,
                    '%',
                    $equipment->fanMotorEfficiencyClassRated,
                    $equipment->fanMotorFrameSizeRated,
                    $equipment->fanInsulationClassRated,
                    $equipment->fanSuctionDuctSizeMeasured,
                    'm2',
                    $equipment->fanSuctionStaticPressureMeasured,
                    $equipment->fanSuctionStaticPressureAverage,
                    $equipment->fanSuctionStaticPressureUnit,
                    $equipment->fanSuctionVelocityPressureMeasured,
                    $equipment->fanSuctionVelocityPressureAverage,
                    $equipment->fanSuctionVelocityPressureUnit,
                    $equipment->fanDischargeDuctSizeMeasured,
                    'm2',
                    $equipment->fanDischargeStaticPressureMeasured,
                    $equipment->fanDischargeStaticPressureAverage,
                    $equipment->fanDischargeStaticPressureUnit,
                    $equipment->fanDischargeVelocityMeasured,
                    $equipment->fanDischargeVelocityAverage,
                    $equipment->fanDischargeVelocityUnit,
                    $equipment->fanDischargeVelocityMeasured,
                    $equipment->fanDischargeVelocityAverage,
                    'm/s',
                    $equipment->fanEfficiencyRated,
                    '',
                    $equipment->fanVFDorNot,
                    $equipment->fanVFDsetting,
                    $equipment->fanOpening,
                    $equipment->fanFlowModulationRequired,
                    $equipment->fanParallelFanOperation,
                    $equipment->fanNosOfRewidingOfMotor,
                    $equipment->fanOperatingHours,
                    $equipment->information->observations ?? '',
                ];

            case 'compressor':
                return [
                    $equipment->information->project->name ?? '',
                    'Air Compressor',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];
            case 'chiller':
                return [
                    $equipment->information->project->name ?? '',
                    'Chiller',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];

            case 'motor':
                return [
                    $equipment->information->project->name ?? '',
                    'Motor',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];

            case 'boiler':
                return [
                    $equipment->information->project->name ?? '',
                    'Boiler',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];

            case 'cooling':
                return [
                    $equipment->information->project->name ?? '',
                    'Cooling Tower',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];

            case 'ahu':
                return [
                    $equipment->information->project->name ?? '',
                    'AHU',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->fanYearOfInstallationRated,
                ];

            default:
                return [];

        }
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]], // Bold heading row
        ];
    }
}
