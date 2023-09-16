<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [\App\Http\Controllers\AuthController::class, 'auth']);
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});
