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
        Schema::create('boilers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('information_id');

            // Rated fields
            $table->text('boilerYearOfInstallationRated')->nullable();
            $table->text('boilerTypeOfBoilerRated')->nullable();
            $table->text('boilerCapacityRated')->nullable();
            $table->text('boilerTypeOfFuelRated')->nullable();
            $table->text('boilerTypeOfBurnerRated')->nullable();
            $table->text('boilerOperatingTempRated')->nullable();
            $table->text('boilerOperatingPressureRated')->nullable();

            // Measured fields
            $table->text('boilerTypeOfFuelMeasured')->nullable();
            $table->text('boilerAverageQuantityOfFuelFiredInADayMeasured')->nullable();
            $table->text('boilerAnalysisOfFuelMeasured')->nullable();
            $table->text('boilerAshMeasured')->nullable();
            $table->text('boilerMoistureMeasured')->nullable();
            $table->text('boilerCarbonMeasured')->nullable();
            $table->text('boilerHydrogenMeasured')->nullable();
            $table->text('boilerNitrogenMeasured')->nullable();
            $table->text('boilerOxygenMeasured')->nullable();
            $table->text('boilerSulphurMeasured')->nullable();
            $table->text('boilerGrossCalorificValueOfFuelMeasured')->nullable();
            $table->text('boilerNetCalorificValueOfFuelMeasured')->nullable();
            $table->text('boilerFlueGasAnalysisCO2Measured')->nullable();
            $table->text('boilerFlueGasAnalysisCOMeasured')->nullable();
            $table->text('boilerFlueGasAnalysisOxygenMeasured')->nullable();
            $table->text('boilerFlueGasTemperatureMeasured')->nullable();
            $table->text('boilerAmbientTemperatureMeasured')->nullable();
            $table->text('boilerHumidityInAirKgOfDryAirMeasured')->nullable();
            $table->text('boilerTotalSurfaceAreaOfBoilerMeasured')->nullable();
            $table->text('boilerVelocityOfWindAroundTheBoilerMeasured')->nullable();
            $table->text('boilerAverageSurfaceTemperatureMeasured')->nullable();
            $table->text('boilerAverageQuantityOfFuelFiredPerHourMeasured')->nullable();
            $table->text('boilerGCVOfFlyAshMeasured')->nullable();
            $table->text('boilerFlyAshKgOfFuelMeasured')->nullable();
            $table->text('boilerGCVOfBottomAshMeasured')->nullable();
            $table->text('boilerOperatingTempMeasured')->nullable();
            $table->text('boilerOperatingPressureMeasured')->nullable();

            // Checklist fields
            $table->text('boilerVFDOnIdFan')->nullable();
            $table->text('boilerVFDOnIdFanVFDSetting')->nullable();
            $table->text('boilerVFDOnFdFan')->nullable();
            $table->text('boilerVFDOnFdFanVFDSetting')->nullable();
            $table->text('boilerMaximumTempCanSustain')->nullable();
            $table->text('boilerAlternateFuelPossibility')->nullable();
            $table->text('boilerBlowDownControl')->nullable();
            $table->text('boilerCollectFeedWaterTestReport')->nullable();
            $table->text('boilerBlowDownWaterTDSvalue')->nullable();
            $table->text('boilerWasteHeatRecovery')->nullable();
            $table->text('boilerBurnerAirMaxTempCapacity')->nullable();
            $table->text('boilerCheckSteamTraps')->nullable();
            $table->text('boilerFlueGasMonitoring')->nullable();
            $table->text('boilerOnlineMonitoringControl')->nullable();
            $table->text('boilerWaterSteamFlowMeterReading')->nullable();
            $table->text('boilerFuelFlowMeterReading')->nullable();
            $table->text('boilerOperatingHours')->nullable();

            // Unit fields
            $table->text('boilerCapacityUnit')->nullable();
            $table->text('boilerAverageQuantityOfFuelFiredInADayUnit')->nullable();
            $table->text('boilerGrossCalorificValueOfFuelUnit')->nullable();
            $table->text('boilerNetCalorificValueOfFuelUnit')->nullable();
            $table->text('boilerHumidityInAirKgOfDryAirUnit')->nullable();
            $table->text('boilerAverageQuantityOfFuelFiredPerHourUnit')->nullable();
            $table->text('boilerGCVOfFlyAshUnit')->nullable();
            $table->text('boilerGCVOfBottomAshUnit')->nullable();
            $table->text('boilerOperatingPressureUnit')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boilers');
    }
};
