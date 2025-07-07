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

            // Add more cases for other itemTypes...

            default:
                return collect();
        }
    }

    public function headings(): array
    {
        switch ($this->itemType) {
            case 'pump':
                return [
                    'Project Name','Equipment', 'Location', 'Make & Model', 'Observations',
                    'Year Of Installation Rated', 'Year Of Installation Measured', 'Flow Rated', 'Flow Measured',
                    'Head Rated', 'Head Measured', 'Voltage Rated', 'Voltage Measured',
                    'Current Rated', 'Current Measured', 'Power Factor Rated', 'Power Factor Measured'
                    // Add remaining fields manually...
                ];

            case 'fan':
                return [
                    'Project Name','Equipment','Location', 'Make & Model', 'Observations',
                    'Year Of Installation Rated', 'Year Of Installation Measured', 'Flow Rated', 'Flow Measured'
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
                    $equipment->information->observations ?? '',
                    $equipment->pumpYearOfInstallationRated,
                    $equipment->pumpYearOfInstallationMeasured,
                    $equipment->pumpFlowRated,
                    $equipment->pumpFlowMeasured,
                    $equipment->pumpHeadRated,
                    $equipment->pumpHeadMeasured,
                    $equipment->pumpVoltageRated,
                    $equipment->pumpVoltageMeasured,
                    $equipment->pumpCurrentRated,
                    $equipment->pumpCurrentMeasured,
                    $equipment->pumpPowerFactorRated,
                    $equipment->pumpPowerFactorMeasured
                    // Map the rest manually...
                ];

            case 'fan':
                return [
                    $equipment->information->project->name ?? '',
                    'Fan',
                    $equipment->information->name_location ?? '',
                    $equipment->information->make_model ?? '',
                    $equipment->information->observations ?? '',
                    $equipment->fanYearOfInstallationRated,
                    $equipment->fanYearOfInstallationMeasured,
                    $equipment->fanFlowRated,
                    $equipment->fanFlowMeasured
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
