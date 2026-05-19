<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use Illuminate\Http\Request;

class AgenceController extends Controller
{
    public function index()
    {
        return Agence::with('vehicules')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string',
            'ville' => 'required|string',
            'adresse' => 'required|string',
            'telephone' => 'required|string'
        ]);

        $agence = Agence::create($validated);

        return response()->json($agence, 201);
    }

    public function show(string $id)
    {
        return Agence::with('vehicules')->findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $agence = Agence::findOrFail($id);

        $agence->update($request->all());

        return response()->json($agence);
    }

    public function destroy(string $id)
    {
        Agence::destroy($id);

        return response()->json([
            'message' => 'Agence supprimée'
        ]);
    }
}