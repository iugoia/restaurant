<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/auth', [\App\Http\Controllers\AuthController::class, 'auth']);
