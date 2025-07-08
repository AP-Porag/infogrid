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

            case 'Motor':
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
                    'Year Of Installation Rated',
                    'Year Of Installation Measured',
                    'Flow Rated',
                    'Flow Measured',
                    'Observations',
                    // Add remaining fields manually...
                ];

            // Add headings for other models...
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
                    $equipment->fanYearOfInstallationMeasured,
                    $equipment->fanFlowRated,
                    $equipment->fanFlowMeasured,
                    $equipment->information->observations ?? '',
                    // Map the rest manually...
                ];

            // Add mapping for other itemTypes...
        }
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]], // Bold heading row
        ];
    }
}
