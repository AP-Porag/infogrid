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
        Schema::create('pumps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');
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
            $table->text('pumpSpeedRated')->nullable();
            $table->text('pumpSpeedMeasured')->nullable();
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
            $table->text('pumpFlowUnit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pumps');
    }
};
