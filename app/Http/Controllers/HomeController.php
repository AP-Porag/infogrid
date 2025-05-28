<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        set_page_meta('Dashboard');

        if (auth()->user()->user_type == User::USER_TYPE_ADMIN) {
            return view('admin.dashboard.index');
        }
        if (auth()->user()->user_type == User::USER_TYPE_USER) {
            return view('admin.dashboard.user_index');
        }

        return view('admin.dashboard.index');
    }
}
