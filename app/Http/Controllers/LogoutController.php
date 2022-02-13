<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout() {
        try {
        $user = Auth::logout();

        return response([
            "success" => true
        ]);
    }
    catch (Exception $ex) {
        return ($ex);
    }
    }
}
