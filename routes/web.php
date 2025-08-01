<?php

use App\Http\Controllers\Admin\Information\InformationController;
use App\Http\Controllers\Admin\Profile\UserProfileController;
use App\Http\Controllers\Admin\Project\ProjectController;
use App\Http\Controllers\Admin\User\UsersController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/execute-command', function () {
    Artisan::call('storage:link');
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    Artisan::call('optimize');
    Artisan::call('config:clear');
    Artisan::call('optimize:clear');
    //Artisan::call('migrate:fresh --seed');
    dd('All commands executed successfully');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');


//all routes for admin
Route::prefix('admin')->as('admin.')->group(function () {
    // USER
    Route::resource('users', UsersController::class);

     //PROJECT
    // Project-specific additional routes
    Route::get('/project/all-projects', [ProjectController::class, 'allProjects']);
    Route::get('/project/contributions/all', [ProjectController::class, 'allContributions']);
    Route::get('/project/{id}/contributions', [ProjectController::class, 'userContributions']);
    Route::get('/project/user-daily-contributions', [ProjectController::class, 'dailyUserContributions']);

    // Resource route for CRUD
    Route::resource('project', ProjectController::class);

    // INFORMATION
    Route::resource('information', InformationController::class);
    Route::post('/export-equipment', [InformationController::class, 'export'])->name('information.export.equipment');



    // PROFILE
    Route::get('/profile', [UserProfileController::class, 'index'])->name('profile.info');
    Route::post('/avatar/update', [UserProfileController::class, 'avatarUpdate'])->name('avatar.update');
    Route::put('/profile/update/{id}', [UserProfileController::class, 'updateProfile'])->name('profile.update');
    Route::post('/pass/update/', [UserProfileController::class, 'updatePassword'])->name('update.password');

});

//all routes for user
Route::prefix('user')->as('user.')->group(function () {

    Route::get('/project/project-contribution', [ProjectController::class, 'userProjectContribution']);
    Route::get('/project/user-contributions', [ProjectController::class, 'userContributionsEntries']);
    // PROJECT
    Route::resource('project', ProjectController::class);

    // INFORMATION
    Route::resource('information', InformationController::class);
});



