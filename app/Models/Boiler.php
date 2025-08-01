<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Boiler extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function information()
    {
        return $this->belongsTo(Information::class, 'information_id');
    }
}
