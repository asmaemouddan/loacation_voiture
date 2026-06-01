<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Agence;

class AgenceSeeder extends Seeder
{
    public function run(): void
    {
        Agence::create([
            'nom' => 'Agence Fès Centre',
            'adresse' => 'Avenue Hassan II, Fès',
            'ville' => 'Fès',
            'telephone' => '0612345678',
        ]);

        Agence::create([
            'nom' => 'Agence Casablanca',
            'adresse' => 'Maarif, Casablanca',
            'ville' => 'Casablanca',
            'telephone' => '0623456789',
        ]);

        Agence::create([
            'nom' => 'Agence Rabat',
            'adresse' => 'Agdal, Rabat',
            'ville' => 'Rabat',
            'telephone' => '0634567890',
        ]);
    }
}