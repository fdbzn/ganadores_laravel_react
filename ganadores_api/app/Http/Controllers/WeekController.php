<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Week;
use App\Models\Winner;


class WeekController extends Controller
{
    public function store(){
        $winner = new Winner();
        $winner->name = "Dan";
        $winner->prize = "shoes";
        
        
        $week = new Week();
        $week->name_week = "jhon week";
        $week->save();

        $week->winner()->save($winner);
        return "it's ok";
    }

    

}
