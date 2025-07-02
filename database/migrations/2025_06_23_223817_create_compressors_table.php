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
        Schema::create('compressors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');
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
            $table->text('airCompressorSpeedRated')->nullable();
            $table->text('airCompressorSpeedMeasured')->nullable();
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
            $table->text('airCompressorPipeVolumeRated')->nullable();
            $table->text('airCompressorPipeVolumeMeasured')->nullable();
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
            $table->text('airCompressorDryerTypeRated')->nullable();
            $table->text('airCompressorDryerTypeMeasured')->nullable();
            $table->text('airCompressorDryerMakeModelRated')->nullable();
            $table->text('airCompressorDryerMakeModelMeasured')->nullable();


            // Air Compressor Leakage test
            $table->text('airCompressorLoadTimeReadingOne')->nullable();
            $table->text('airCompressorLoadTimeReadingTwo')->nullable();
            $table->text('airCompressorLoadTimeReadingThree')->nullable();
            $table->text('airCompressorUnLoadTimeReadingOne')->nullable();
            $table->text('airCompressorUnLoadTimeReadingTwo')->nullable();
            $table->text('airCompressorUnLoadTimeReadingThree')->nullable();
            $table->text('airCompressorLeakageReadingOne')->nullable();
            $table->text('airCompressorLeakageReadingTwo')->nullable();
            $table->text('airCompressorLeakageReadingThree')->nullable();

            // Air Compressor checklist
            $table->text('airCompressorVFDorNot')->nullable();
            $table->text('airCompressorVFDSetting')->nullable();
            $table->text('airCompressorNosOfRewidingOfMotor')->nullable();
            $table->text('airCompressorCheckRequiredpressure')->nullable();
            $table->text('airCompressorCheckPressureDrop')->nullable();
            $table->text('airCompressorCheckEndUsePointPressure')->nullable();
            $table->text('airCompressorCheckInletAirFilterDp')->nullable();
            $table->text('airCompressorCheckLoadTime')->nullable();
            $table->text('airCompressorCheckUnLoadTime')->nullable();
            $table->text('airCompressorCheckLoadHours')->nullable();
            $table->text('airCompressorCheckRunHours')->nullable();
            $table->text('airCompressorCheckAmbientTemp')->nullable();
            $table->text('airCompressorOperatingHours')->nullable();
            $table->text('airCompressorFlowUnit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compressors');
    }
};
