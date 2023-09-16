<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function auth(Request $request)
    {
        $credentials = $request->only(['login', 'password']);
        $remember = $request->input('remember');

        if (Auth::attempt($credentials, $remember)) {
            $user = Auth::user();
            $user->tokens()->delete();

            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
                'token' => $token,
            ]);
        }

        return response()->json([
            'error' => 'Пользователь не найден'
        ], 401);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'Вы успешно вышли из системы'
        ]);
    }
}
