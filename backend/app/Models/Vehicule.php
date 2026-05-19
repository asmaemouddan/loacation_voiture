<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Reservation;
use App\Models\Agence;

class Vehicule extends Model
{
    use HasFactory;

    protected $fillable = [
        'agence_id',
        'marque',
        'modele',
        'matricule',
        'prix_jour',
        'image',
        'status'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function agence()
    {
        return $this->belongsTo(Agence::class);
    }
}