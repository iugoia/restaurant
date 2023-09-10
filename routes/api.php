<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Route::middleware(['web'])->group(function() {
    Route::post('/auth', [\App\Http\Controllers\AuthController::class, 'auth']);
    Route::get('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
//});
