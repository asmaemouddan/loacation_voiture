<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Agence extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'ville',
        'adresse',
        'telephone'
    ];

    public function vehicules()
    {
        return $this->hasMany(Vehicule::class);
    }
}
