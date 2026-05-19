<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
 public function index(Request $request)
{
    
    $query = Vehicule::query();

    if ($request->has('marque')) {

        $query->where('marque', 'like',
            '%' . $request->marque . '%');
    }

    if ($request->has('status')) {

        $query->where('status', $request->status);
    }

    if ($request->has('prix_max')) {

        $query->where('prix_jour', '<=',
            $request->prix_max);
    }
$query->latest();
    return $query->paginate(10);
}

public function store(Request $request)
{
    $validated = $request->validate([
        'agence_id' => 'nullable|exists:agences,id',
        'marque' => 'required|string',
        'modele' => 'required|string',
        'matricule' => 'required|string|unique:vehicules,matricule',
        'prix_jour' => 'required|numeric',
        'image' => 'nullable|string',
        'status' => 'required|in:disponible,indisponible'
    ]);

    $vehicule = Vehicule::create($validated);

    return response()->json($vehicule, 201);
}

    public function show(string $id)
    {
        return Vehicule::findOrFail($id);
    }

   public function update(Request $request, string $id)
{
    $vehicule = Vehicule::findOrFail($id);

    $validated = $request->validate([
        'agence_id' => 'sometimes|nullable|exists:agences,id',
        'marque' => 'sometimes|string',
        'modele' => 'sometimes|string',
        'matricule' => 'sometimes|string|unique:vehicules,matricule,' . $id,
        'prix_jour' => 'sometimes|numeric',
        'image' => 'nullable|string',
        'status' => 'sometimes|in:disponible,indisponible'
    ]);

    $vehicule->update($validated);

    return response()->json($vehicule);
}
    public function destroy(string $id)
    {
        Vehicule::destroy($id);

        return response()->json([
            'message' => 'Vehicule supprimé'
        ]);
    }
}