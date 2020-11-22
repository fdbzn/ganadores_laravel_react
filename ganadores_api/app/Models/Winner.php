<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Winner extends Model
{
    protected $fillable = ['name', 'prize'];

    public function week()
    {
        return $this->belongsTo('App\Models\Week');
    }
}
