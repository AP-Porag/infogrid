<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('sku');
            // General fields
            $table->string('itemType')->nullable();
            $table->string('images')->nullable();
            $table->string('observations')->nullable();

            // Pump fields
            $table->text('pumpYearOfInstallationRated')->nullable();
            $table->text('pumpYearOfInstallationMeasured')->nullable();
            $table->text('pumpFlowRated')->nullable();
            $table->text('pumpFlowMeasured')->nullable();
            $table->text('pumpHeadRated')->nullable();
            $table->text('pumpHeadMeasured')->nullable();
            $table->text('pumpVoltageRated')->nullable();
            $table->text('pumpVoltageMeasured')->nullable();
            $table->text('pumpCurrentRated')->nullable();
            $table->text('pumpCurrentMeasured')->nullable();
            $table->text('pumpPowerFactorRated')->nullable();
            $table->text('pumpPowerFactorMeasured')->nullable();
            $table->text('pumpMotorPowerRated')->nullable();
            $table->text('pumpMotorPowerMeasured')->nullable();
            $table->text('pumpMotorEfficiencyRated')->nullable();
            $table->text('pumpMotorEfficiencyMeasured')->nullable();
            $table->text('pumpMotorEfficiencyClassRated')->nullable();
            $table->text('pumpMotorEfficiencyClassMeasured')->nullable();
            $table->text('pumpMotorFrameSizeRated')->nullable();
            $table->text('pumpMotorFrameSizeMeasured')->nullable();
            $table->text('pumpInsulationClassRated')->nullable();
            $table->text('pumpInsulationClassMeasured')->nullable();
            $table->text('pumpSuctionHeadRated')->nullable();
            $table->text('pumpSuctionHeadMeasured')->nullable();
            $table->text('pumpDischargeHeadRated')->nullable();
            $table->text('pumpDischargeHeadMeasured')->nullable();
            $table->text('pumpEfficiencyRated')->nullable();
            $table->text('pumpEfficiencyMeasured')->nullable();

            // Pump checklist
            $table->text('pumpVFDorNot')->nullable();
            $table->text('pumpVFDSetting')->nullable();
            $table->text('pumpThrottling')->nullable();
            $table->text('pumpFlowModulationRequired')->nullable();
            $table->text('pumpParallelPumpOperation')->nullable();
            $table->text('pumpNosOfRewidingOfMotor')->nullable();
            $table->text('pumpCheckCavitation')->nullable();
            $table->text('pumpOperatingHours')->nullable();

            // Fan fields
            $table->text('fanYearOfInstallationRated')->nullable();
            $table->text('fanYearOfInstallationMeasured')->nullable();
            $table->text('fanFlowRated')->nullable();
            $table->text('fanFlowMeasured')->nullable();
            $table->text('fanHeadRated')->nullable();
            $table->text('fanHeadMeasured')->nullable();
            $table->text('fanVoltageRated')->nullable();
            $table->text('fanVoltageMeasured')->nullable();
            $table->text('fanCurrentRated')->nullable();
            $table->text('fanCurrentMeasured')->nullable();
            $table->text('fanPowerFactorRated')->nullable();
            $table->text('fanPowerFactorMeasured')->nullable();
            $table->text('fanMotorPowerRated')->nullable();
            $table->text('fanMotorPowerMeasured')->nullable();
            $table->text('fanMotorEfficiencyRated')->nullable();
            $table->text('fanMotorEfficiencyMeasured')->nullable();
            $table->text('fanMotorEfficiencyClassRated')->nullable();
            $table->text('fanMotorEfficiencyClassMeasured')->nullable();
            $table->text('fanMotorFrameSizeRated')->nullable();
            $table->text('fanMotorFrameSizeMeasured')->nullable();
            $table->text('fanInsulationClassRated')->nullable();
            $table->text('fanInsulationClassMeasured')->nullable();
            $table->text('fanSuctionDuctSizeRated')->nullable();
            $table->text('fanSuctionDuctSizeMeasured')->nullable();
            $table->text('fanSuctionStaticPressureRated')->nullable();
            $table->text('fanSuctionStaticPressureMeasured')->nullable();
            $table->text('fanSuctionVelocityPressureRated')->nullable();
            $table->text('fanSuctionVelocityPressureMeasured')->nullable();
            $table->text('fanDischargeDuctSizeRated')->nullable();
            $table->text('fanDischargeDuctSizeMeasured')->nullable();
            $table->text('fanDischargeStaticPressureRated')->nullable();
            $table->text('fanDischargeStaticPressureMeasured')->nullable();
            $table->text('fanDischargeVelocityPressureRated')->nullable();
            $table->text('fanDischargeVelocityPressureMeasured')->nullable();
            $table->text('fanEfficiencyRated')->nullable();
            $table->text('fanEfficiencyMeasured')->nullable();

            // Fan checklist
            $table->text('fanVFDorNot')->nullable();
            $table->text('fanVFDSetting')->nullable();
            $table->text('fanOpening')->nullable();
            $table->text('fanFlowModulationRequired')->nullable();
            $table->text('fanParallelFanOperation')->nullable();
            $table->text('fanNosOfRewidingOfMotor')->nullable();
            $table->text('fanOperatingHours')->nullable();

            // Air Compressor fields
            $table->text('airCompressorYearOfInstallationRated')->nullable();
            $table->text('airCompressorYearOfInstallationMeasured')->nullable();
            $table->text('airCompressorFlowRated')->nullable();
            $table->text('airCompressorFlowMeasured')->nullable();
            $table->text('airCompressorPressureRated')->nullable();
            $table->text('airCompressorPressureMeasured')->nullable();
            $table->text('airCompressorVoltageRated')->nullable();
            $table->text('airCompressorVoltageMeasured')->nullable();
            $table->text('airCompressorCurrentRated')->nullable();
            $table->text('airCompressorCurrentMeasured')->nullable();
            $table->text('airCompressorPowerFactorRated')->nullable();
            $table->text('airCompressorPowerFactorMeasured')->nullable();
            $table->text('airCompressorMotorPowerRated')->nullable();
            $table->text('airCompressorMotorPowerMeasured')->nullable();
            $table->text('airCompressorMotorEfficiencyRated')->nullable();
            $table->text('airCompressorMotorEfficiencyMeasured')->nullable();
            $table->text('airCompressorMotorEfficiencyClassRated')->nullable();
            $table->text('airCompressorMotorEfficiencyClassMeasured')->nullable();
            $table->text('airCompressorMotorFrameSizeRated')->nullable();
            $table->text('airCompressorMotorFrameSizeMeasured')->nullable();
            $table->text('airCompressorInsulationClassRated')->nullable();
            $table->text('airCompressorInsulationClassMeasured')->nullable();
            $table->text('airCompressorLoadPressureRated')->nullable();
            $table->text('airCompressorLoadPressureMeasured')->nullable();
            $table->text('airCompressorUnLoadPressureRated')->nullable();
            $table->text('airCompressorUnLoadPressureMeasured')->nullable();
            $table->text('airCompressorRecieverSizeRated')->nullable();
            $table->text('airCompressorRecieverSizeMeasured')->nullable();
            $table->text('airCompressorInitialPressureRated')->nullable();
            $table->text('airCompressorInitialPressureMeasured')->nullable();
            $table->text('airCompressorFinalPressureRated')->nullable();
            $table->text('airCompressorFinalPressureMeasured')->nullable();
            $table->text('airCompressorTimeToReachFinalPressureRated')->nullable();
            $table->text('airCompressorTimeToReachFinalPressureMeasured')->nullable();
            $table->text('airCompressorTemperatureRated')->nullable();
            $table->text('airCompressorTemperatureMeasured')->nullable();
            $table->text('airCompressorCompressorSECRated')->nullable();
            $table->text('airCompressorCompressorSECMeasured')->nullable();

            // Air Compressor Leakage test
            $table->text('airCompressorLoadTimeReadingOne')->nullable();
            $table->text('airCompressorLoadTimeReadingTwo')->nullable();
            $table->text('airCompressorUnLoadTimeReadingOne')->nullable();
            $table->text('airCompressorUnLoadTimeReadingTwo')->nullable();

            // Air Compressor checklist
            $table->text('airCompressorVFDorNot')->nullable();
            $table->text('airCompressorNosOfRewidingOfMotor')->nullable();
            $table->text('airCompressorCheckRequiredpressure')->nullable();
            $table->text('airCompressorCheckPressureDrop')->nullable();
            $table->text('airCompressorOperatingHours')->nullable();

            // Chiller fields
            $table->text('chillerYearOfInstallationRated')->nullable();
            $table->text('chillerYearOfInstallationMeasured')->nullable();
            $table->text('chillerCapacityRated')->nullable();
            $table->text('chillerCapacityMeasured')->nullable();
            $table->text('chillerVoltageRated')->nullable();
            $table->text('chillerVoltageMeasured')->nullable();
            $table->text('chillerCurrentRated')->nullable();
            $table->text('chillerCurrentMeasured')->nullable();
            $table->text('chillerPowerFactorRated')->nullable();
            $table->text('chillerPowerFactorMeasured')->nullable();
            $table->text('chillerMotorPowerRated')->nullable();
            $table->text('chillerMotorPowerMeasured')->nullable();
            $table->text('chillerMotorEfficiencyRated')->nullable();
            $table->text('chillerMotorEfficiencyMeasured')->nullable();
            $table->text('chillerMotorEfficiencyClassRated')->nullable();
            $table->text('chillerMotorEfficiencyClassMeasured')->nullable();
            $table->text('chillerMotorFrameSizeRated')->nullable();
            $table->text('chillerMotorFrameSizeMeasured')->nullable();
            $table->text('chillerSupplyTempRated')->nullable();
            $table->text('chillerSupplyTempMeasured')->nullable();
            $table->text('chillerReturnTempRated')->nullable();
            $table->text('chillerReturnTempMeasured')->nullable();
            $table->text('chillerFlowRated')->nullable();
            $table->text('chillerFlowMeasured')->nullable();
            $table->text('chillerChillerSECRated')->nullable();
            $table->text('chillerChillerSECMeasured')->nullable();
            $table->text('chillerCondenserApprochRated')->nullable();
            $table->text('chillerCondenserApprochMeasured')->nullable();

            // Chiller checklist
            $table->text('chillerVFDorNot')->nullable();
            $table->text('chillerSetTemp')->nullable();
            $table->text('chillerCheckCondenserCondition')->nullable();
            $table->text('chillerOperatingHours')->nullable();

            // Motor fields
            $table->text('motorYearOfInstallationRated')->nullable();
            $table->text('motorYearOfInstallationMeasured')->nullable();
            $table->text('motorNameOfEquipmentRated')->nullable();
            $table->text('motorNameOfEquipmentMeasured')->nullable();
            $table->text('motorVoltageRated')->nullable();
            $table->text('motorVoltageMeasured')->nullable();
            $table->text('motorCurrentRated')->nullable();
            $table->text('motorCurrentMeasured')->nullable();
            $table->text('motorPowerFactorRated')->nullable();
            $table->text('motorPowerFactorMeasured')->nullable();
            $table->text('motorMotorPowerRated')->nullable();
            $table->text('motorMotorPowerMeasured')->nullable();
            $table->text('motorMotorEfficiencyRated')->nullable();
            $table->text('motorMotorEfficiencyMeasured')->nullable();
            $table->text('motorMotorEfficiencyClassRated')->nullable();
            $table->text('motorMotorEfficiencyClassMeasured')->nullable();
            $table->text('motorMotorFrameSizeRated')->nullable();
            $table->text('motorMotorFrameSizeMeasured')->nullable();

            // Motor checklist
            $table->text('motorVFDorNot')->nullable();
            $table->text('motorCheckPerPhaseCurrent')->nullable();
            $table->text('motorCheckPhasor')->nullable();
            $table->text('motorNosOfRewidingOfMotor')->nullable();
            $table->text('motorOperatingHours')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('information');
    }
};
