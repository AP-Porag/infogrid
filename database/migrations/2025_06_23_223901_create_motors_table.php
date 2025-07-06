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
        Schema::create('motors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');

            $table->text('motorYearOfInstallationRated')->nullable();
            $table->text('motorYearOfInstallationMeasured')->nullable();
//            $table->text('motorNameOfEquipmentRated')->nullable();
//            $table->text('motorNameOfEquipmentMeasured')->nullable();
            $table->text('motorVoltageRated')->nullable();
            $table->text('motorVoltageMeasured')->nullable();
            $table->text('motorCurrentRated')->nullable();
            $table->text('motorCurrentMeasured')->nullable();
            $table->text('motorPowerFactorRated')->nullable();
            $table->text('motorPowerFactorMeasured')->nullable();
            $table->text('motorSpeedRated')->nullable();
            $table->text('motorSpeedMeasured')->nullable();
            $table->text('motorTempRated')->nullable();
            $table->text('motorTempMeasured')->nullable();
            $table->text('motorMotorPowerRated')->nullable();
            $table->text('motorMotorPowerMeasured')->nullable();
            $table->text('motorMotorEfficiencyRated')->nullable();
            $table->text('motorMotorEfficiencyMeasured')->nullable();
            $table->text('motorMotorEfficiencyClassRated')->nullable();
            $table->text('motorMotorEfficiencyClassMeasured')->nullable();
            $table->text('motorMotorFrameSizeRated')->nullable();
            $table->text('motorMotorFrameSizeMeasured')->nullable();
            $table->text('motorFrequencyRated')->nullable();
            $table->text('motorFrequencyMeasured')->nullable();

            // Motor checklist
            $table->text('motorVFDorNot')->nullable();
            $table->text('motorVFDSetting')->nullable();
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
        Schema::dropIfExists('motors');
    }
};
