
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\AgenceController;
use App\Http\Controllers\DocumentController;
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
| PUBLIC VEHICULES & AGENCES
|--------------------------------------------------------------------------
*/

Route::get('/vehicules', [VehiculeController::class, 'index']);
Route::get('/vehicules/{id}', [VehiculeController::class, 'show']);

Route::get('/agences', [AgenceController::class, 'index']);
Route::get('/agences/{id}', [AgenceController::class, 'show']);

/*
|--------------------------------------------------------------------------
| AUTH ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | USER AUTH
    |--------------------------------------------------------------------------
    */

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/profile', [AuthController::class, 'profile']);

    /*
    |--------------------------------------------------------------------------
    | RESERVATIONS
    |--------------------------------------------------------------------------
    */

    Route::apiResource('reservations', ReservationController::class);

    /*
    |--------------------------------------------------------------------------
    | DOCUMENTS + OCR
    |--------------------------------------------------------------------------
    */

    Route::apiResource('documents', DocumentController::class);

    Route::apiResource('ocr-results', OcrResultController::class);

});

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | VEHICULES MANAGEMENT
    |--------------------------------------------------------------------------
    */

    Route::post('/vehicules', [VehiculeController::class, 'store']);

    Route::put('/vehicules/{id}', [VehiculeController::class, 'update']);

    Route::delete('/vehicules/{id}', [VehiculeController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | AGENCES MANAGEMENT
    |--------------------------------------------------------------------------
    */

    Route::post('/agences', [AgenceController::class, 'store']);

    Route::put('/agences/{id}', [AgenceController::class, 'update']);

    Route::delete('/agences/{id}', [AgenceController::class, 'destroy']);

    /*
    |--------------------------------------------------------------------------
    | RESERVATIONS MANAGEMENT
    |--------------------------------------------------------------------------
    */

    Route::put('/reservations/{id}/accepter',
        [ReservationController::class, 'accepter']);

    Route::put('/reservations/{id}/refuser',
        [ReservationController::class, 'refuser']);

    Route::put('/reservations/{id}/annuler',
        [ReservationController::class, 'annuler']);

});

/*
|--------------------------------------------------------------------------
| TEST VEHICLES
|--------------------------------------------------------------------------
*/

Route::get('/vehicles', function () {

    return [

        [
            "id" => 1,
            "name" => "BMW Série 3",
            "category" => "Premium",
            "price" => 650,
            "image" => "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=90",
            "badge" => "Premium",
            "rating" => 4.8
        ],

        [
            "id" => 2,
            "name" => "Audi R8",
            "category" => "Sport",
            "price" => 1200,
            "image" => "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=90",
            "badge" => "Sport",
            "rating" => 5.0
        ],

        [
            "id" => 3,
            "name" => "Range Rover",
            "category" => "SUV",
            "price" => 950,
            "image" => "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=90",
            "badge" => "SUV",
            "rating" => 4.9
        ]

    ];
});