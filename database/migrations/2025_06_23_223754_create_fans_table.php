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
        Schema::create('fans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');
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
            $table->text('fanSpeedRated')->nullable();
            $table->text('fanSpeedMeasured')->nullable();
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
            $table->text('fanSuctionStaticPressureAverage')->nullable();
            $table->text('fanSuctionStaticPressureMeasured')->nullable();
            $table->text('fanSuctionVelocityPressureRated')->nullable();
            $table->text('fanSuctionVelocityPressureAverage')->nullable();
            $table->text('fanSuctionVelocityPressureMeasured')->nullable();
            $table->text('fanDischargeDuctSizeRated')->nullable();
            $table->text('fanDischargeDuctSizeMeasured')->nullable();
            $table->text('fanDischargeStaticPressureRated')->nullable();
            $table->text('fanDischargeStaticPressureAverage')->nullable();
            $table->text('fanDischargeStaticPressureMeasured')->nullable();
            $table->text('fanDischargeVelocityPressureRated')->nullable();
            $table->text('fanDischargeVelocityPressureAverage')->nullable();
            $table->text('fanDischargeVelocityPressureMeasured')->nullable();
            $table->text('fanDischargeVelocityRated')->nullable();
            $table->text('fanDischargeVelocityAverage')->nullable();
            $table->text('fanDischargeVelocityMeasured')->nullable();
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
            $table->text('fanFrequencyRated')->nullable();
            $table->text('fanFrequencyMeasured')->nullable();

            //units
            $table->text('fanFlowUnit')->nullable();
            $table->text('fanSuctionStaticPressureUnit')->nullable();
            $table->text('fanSuctionVelocityPressureUnit')->nullable();
            $table->text('fanDischargeStaticPressureUnit')->nullable();
            $table->text('fanDischargeVelocityPressureUnit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fans');
    }
};
