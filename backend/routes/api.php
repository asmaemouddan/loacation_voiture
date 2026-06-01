<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\AgenceController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\OcrController;
use App\Http\Controllers\OcrResultController;

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| PUBLIC CLIENTS FOR DEMO
|--------------------------------------------------------------------------
*/

Route::get('/clients', function () {
    return User::where('role', 'user')
        ->orWhere('role', 'client')
        ->latest()
        ->paginate(10);
});

/*
|--------------------------------------------------------------------------
| PUBLIC VEHICULES & AGENCES
|--------------------------------------------------------------------------
*/

Route::get('/vehicules', [VehiculeController::class, 'index']);
Route::get('/vehicules/{id}', [VehiculeController::class, 'show']);

Route::get('/agences', [AgenceController::class, 'index']);
Route::get('/agences/{id}', [AgenceController::class, 'show']);

/*
|--------------------------------------------------------------------------
| PUBLIC RESERVATIONS FOR DEMO
|--------------------------------------------------------------------------
*/

Route::apiResource('reservations', ReservationController::class);

Route::put('/reservations/{id}/accepter', [ReservationController::class, 'accepter']);
Route::put('/reservations/{id}/refuser', [ReservationController::class, 'refuser']);
Route::put('/reservations/{id}/annuler', [ReservationController::class, 'annuler']);

/*
|--------------------------------------------------------------------------
| AUTH ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);

    Route::apiResource('documents', DocumentController::class);
    Route::apiResource('ocr-results', OcrResultController::class);
});

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/ocr/scan', [OcrController::class, 'scan']);

    Route::post('/vehicules', [VehiculeController::class, 'store']);
    Route::put('/vehicules/{id}', [VehiculeController::class, 'update']);
    Route::delete('/vehicules/{id}', [VehiculeController::class, 'destroy']);

    Route::post('/agences', [AgenceController::class, 'store']);
    Route::put('/agences/{id}', [AgenceController::class, 'update']);
    Route::delete('/agences/{id}', [AgenceController::class, 'destroy']);
});