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
        Schema::create('ahus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');

            // Rated fields
            $table->text('ahuYearOfInstallationRated')->nullable();
            $table->text('ahuCapacityRated')->nullable();
            $table->text('ahuTypeOfAHURated')->nullable();
            $table->text('ahuFanPowerRated')->nullable();
            $table->text('ahuNumberOfCellsRated')->nullable();
            $table->text('ahuStaticPressureRated')->nullable();
            $table->text('ahuAHUDPRated')->nullable();

            // Measured fields
            $table->text('ahuCapacityMeasured')->nullable();
            $table->text('ahuEnteringWaterTempMeasured')->nullable();
            $table->text('ahuLeavingWaterTempMeasured')->nullable();
            $table->text('ahuFanPowerMeasured')->nullable();
            $table->text('ahuNumberOfCellsMeasured')->nullable();
            $table->text('ahuEnteringAirTempDBTMeasured')->nullable();
            $table->text('ahuEnteringAirTempWBTMeasured')->nullable();
            $table->text('ahuLeavingAirTempDBTMeasured')->nullable();
            $table->text('ahuLeavingAirTempWBTMeasured')->nullable();
            $table->text('ahuFlowOfWaterMeasured')->nullable();
            $table->text('ahuAirVelocityMeasured')->nullable();
            $table->text('ahuAirVelocityMeasuredAverage')->nullable();
            $table->text('ahuAirAreaOfDuctMeasured')->nullable();
            $table->text('ahuStaticPressureMeasured')->nullable();
            $table->text('ahuStaticPressureMeasuredAverage')->nullable();
            $table->text('ahuAHUDPMeasured')->nullable();
            $table->text('ahuAHUDPMeasuredAverage')->nullable();

            // Checklist fields
            $table->text('ahuVFDOnFanOrNot')->nullable();
            $table->text('ahuVFDSettingFan')->nullable();
            $table->text('ahuDamperPosition')->nullable();
            $table->text('ahuConnectedWithBMS')->nullable();
            $table->text('ahuModulatingValve')->nullable();
            $table->text('ahuSetTemp')->nullable();
            $table->text('ahuOperatingHours')->nullable();

            $table->text('ahuCapacityUnit')->nullable();
            $table->text('ahuFlowOfWaterUnit')->nullable();
            $table->text('ahuStaticPressureUnit')->nullable();
            $table->text('ahuAHUDPUnit')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ahus');
    }
};
