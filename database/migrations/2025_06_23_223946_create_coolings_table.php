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
        Schema::create('coolings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');
            $table->text('coolingYearOfInstallationRated')->nullable();
            $table->text('coolingCapacityRated')->nullable();
            $table->text('coolingTypeOfCoolingTowerRated')->nullable();
            $table->text('coolingEnteringWaterTempRated')->nullable();
            $table->text('coolingLeavingWaterTempRated')->nullable();
            $table->text('coolingFanPowerRated')->nullable();
            $table->text('coolingFanPowerMeasured')->nullable();
            $table->text('coolingNumberOfCellsRated')->nullable();
            $table->text('coolingNumberOfCellsMeasured')->nullable();
            $table->text('coolingEnteringAirTempDBTMeasured')->nullable();
            $table->text('coolingEnteringAirTempWBTMeasured')->nullable();
            $table->text('coolingLeavingAirTempDBTMeasured')->nullable();
            $table->text('coolingLeavingAirTempWBTMeasured')->nullable();
            $table->text('coolingFlowOfWaterMeasured')->nullable();
            $table->text('coolingAirVelocityMeasured')->nullable();
            $table->text('coolingAreaOfFanOfCTMeasured')->nullable();
                    //checklist
            $table->text('coolingVFDOnFanOrNot')->nullable();
            $table->text('coolingVFDSettingFan')->nullable();
            $table->text('coolingVFDOnPumpOrNot')->nullable();
            $table->text('coolingDriftLossVisible')->nullable();
            $table->text('coolingNosOfRewidingOfFanMotor')->nullable();
            $table->text('coolingOperatingHours')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coolings');
    }
};
