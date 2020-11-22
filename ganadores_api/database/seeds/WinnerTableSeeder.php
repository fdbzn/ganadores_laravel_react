<?php
use App\Models\Winner;
use Illuminate\Database\Seeder;

class WinnerTableSeeder extends Seeder
{
    public function run()
    {
        Winner::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Winner::create([
                'name' => $faker->name,
                'prize' => $faker->sentence,
                'week_id' => random_int(1,8),
            ]);
        }
    }
}