<?php

namespace App\Http\Controllers;
use App\Models\Winner;

use Illuminate\Http\Request;

class WinnerController extends Controller
{
    public function get_winners_by_week_id( $week_id=1 ){
        return Winner::with('week')->where('week_id', $week_id)->get();
    }
}
