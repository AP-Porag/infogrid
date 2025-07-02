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
        Schema::create('chillers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');
            $table->text('chillerYearOfInstallationRated')->nullable();
            $table->text('chillerYearOfInstallationMeasured')->nullable();
            $table->text('chillerTypeOfChillerRated')->nullable();
            $table->text('chillerTypeOfChillerMeasured')->nullable();
            $table->text('chillerNosOfCompressorRated')->nullable();
            $table->text('chillerNosOfCompressorMeasured')->nullable();
            $table->text('chillerCapacityRated')->nullable();
            $table->text('chillerCapacityMeasured')->nullable();
            $table->text('chillerVoltageRated')->nullable();
            $table->text('chillerVoltageMeasured')->nullable();
            $table->text('chillerCurrentRated')->nullable();
            $table->text('chillerCurrentMeasured')->nullable();
            $table->text('chillerPowerFactorRated')->nullable();
            $table->text('chillerPowerFactorMeasured')->nullable();
            $table->text('chillerSpeedRated')->nullable();
            $table->text('chillerSpeedMeasured')->nullable();
            $table->text('chillerMotorPowerRated')->nullable();
            $table->text('chillerMotorPowerMeasured')->nullable();
            $table->text('chillerMotorEfficiencyRated')->nullable();
            $table->text('chillerMotorEfficiencyMeasured')->nullable();
            $table->text('chillerMotorEfficiencyClassRated')->nullable();
            $table->text('chillerMotorEfficiencyClassMeasured')->nullable();
            $table->text('chillerMotorFrameSizeRated')->nullable();
            $table->text('chillerMotorFrameSizeMeasured')->nullable();
            $table->text('chillerChillerLoadingRated')->nullable();
            $table->text('chillerChillerLoadingMeasured')->nullable();
            $table->text('chillerSupplyTempRated')->nullable();
            $table->text('chillerSupplyTempMeasured')->nullable();
            $table->text('chillerReturnTempRated')->nullable();
            $table->text('chillerReturnTempMeasured')->nullable();
            $table->text('chillerFlowRated')->nullable();
            $table->text('chillerFlowMeasured')->nullable();
            $table->text('chillerFlowMeasuredAverage')->nullable();
            $table->text('chillerChillerSECRated')->nullable();
            $table->text('chillerChillerSECMeasured')->nullable();
            $table->text('chillerCondenserApprochRated')->nullable();
            $table->text('chillerCondenserApprochMeasured')->nullable();

            // Chiller checklist
            $table->text('chillerVFDorNot')->nullable();
            $table->text('chillerVFDSetting')->nullable();
            $table->text('chillerSetTemp')->nullable();
            $table->text('chillerCheckCondenserCondition')->nullable();
            $table->text('chillerTakeChillerHMIData')->nullable();
            $table->text('chillerOperatingHours')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chillers');
    }
};
