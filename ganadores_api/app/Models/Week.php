<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Week extends Model
{
    public function winner()
    {
        return $this->hasMany('App\Models\Winner');
    }
}
