<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vehicule;

class VehiculeSeeder extends Seeder
{
    public function run(): void
    {
        $vehicules = [
            ['Porsche', '911 Carrera', 'A-12345', 1800, 'disponible', '/images/cars/porsche.jpg', 1],
            ['BMW', 'M4 Competition', 'B-45678', 1600, 'indisponible', '/images/cars/bmw-m4.jpg', 2],
            ['Mercedes', 'AMG GT', 'C-78965', 2200, 'disponible', '/images/cars/amg.jpg', 3],
            ['Audi', 'RS7', 'D-10293', 1750, 'disponible', '/images/cars/audi-rs7.jpg', 1],
            ['Range Rover', 'Sport', 'E-92837', 2100, 'indisponible', '/images/cars/range.jpg', 2],
            ['Tesla', 'Model S', 'F-66372', 1900, 'disponible', '/images/cars/tesla.jpg', 3],
            ['Lamborghini', 'Huracan', 'G-87362', 4500, 'disponible', '/images/cars/lamborghini.jpg', 1],
            ['Ferrari', 'F8 Tributo', 'H-92716', 5200, 'indisponible', '/images/cars/ferrari.jpg', 2],
            ['Toyota', 'Corolla', 'J-67392', 500, 'disponible', '/images/cars/corolla.jpg', 3],
            ['Hyundai', 'Tucson', 'K-56281', 850, 'disponible', '/images/cars/tucson.jpg', 1],
            ['Peugeot', '208', 'L-78291', 450, 'indisponible', '/images/cars/208.jpg', 2],
            ['Jeep', 'Wrangler', 'M-18273', 1700, 'disponible', '/images/cars/jeep.jpg', 3],
        ];

        foreach ($vehicules as $v) {
            Vehicule::create([
                'marque' => $v[0],
                'modele' => $v[1],
                'matricule' => $v[2],
                'prix_jour' => $v[3],
                'status' => $v[4],
                'image' => $v[5],
                'agence_id' => $v[6],
            ]);
        }
    }
}