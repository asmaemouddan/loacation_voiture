<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vehicule;

class VehiculeSeeder extends Seeder
{
    public function run(): void
    {
        Vehicule::create([
            'marque' => 'BMW',
            'modele' => 'M4 Competition',
            'matricule' => '12345-A-6',
            'prix_jour' => 1200,
            'status' => 'disponible',
            'image' => '/images/cars/bmw-m4.jpg',
            'agence_id' => 1,
        ]);

        Vehicule::create([
            'marque' => 'Audi',
            'modele' => 'RS7 Sportback',
            'matricule' => '67890-B-6',
            'prix_jour' => 1300,
            'status' => 'disponible',
            'image' => '/images/cars/audi-rs7.jpg',
            'agence_id' => 1,
        ]);

        Vehicule::create([
            'marque' => 'Mercedes',
            'modele' => 'AMG C63',
            'matricule' => '22222-C-6',
            'prix_jour' => 1100,
            'status' => 'disponible',
            'image' => '/images/cars/amg.jpg',
            'agence_id' => 2,
        ]);

        Vehicule::create([
            'marque' => 'Porsche',
            'modele' => '911 Carrera',
            'matricule' => '33333-D-6',
            'prix_jour' => 1800,
            'status' => 'indisponible',
            'image' => '/images/cars/porsche-911.jpg',
            'agence_id' => 3,
        ]);
    }
}