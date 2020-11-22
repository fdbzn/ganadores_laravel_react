<?php

use Illuminate\Database\Seeder;
use App\Models\Week;

class WeekTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $arr_week = [
            ["name_week"=>"26 de octubre del 2020 a partir de las 12:30", "status"=>1],
            ["name_week"=>"03 de noviembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"09 de noviembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"16 de noviembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"23 de noviembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"07 de diciembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"14 de diciembre de 2020 a partir de las 12:30", "status"=>0],
            ["name_week"=>"21 de diciembre de 2020 a partir de las 12:30", "status"=>0],            
        ];

        foreach( $arr_week as $week ){
            Week::create([
                'name_week' => $week["name_week"],
                'status' => $week["status"]
            ]);
        }
         
    }
}
