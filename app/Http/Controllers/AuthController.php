<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function auth(Request $request)
    {
        $credentials = $request->only(['login', 'password']);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
                'token' => $token
            ]);
        }

        return response()->json([
            'error' => 'Пользователь не найден'
        ], 401);
    }
}
