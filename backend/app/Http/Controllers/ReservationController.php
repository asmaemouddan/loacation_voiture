<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        return Reservation::with(['user', 'vehicule'])
            ->latest()
            ->paginate(10);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'vehicule_id' => 'required|exists:vehicules,id',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after:date_debut',
            'prix_total' => 'required|numeric',
            'status' => 'nullable|in:en_attente,acceptee,refusee,annulee'
        ]);

        $exists = Reservation::where('vehicule_id', $validated['vehicule_id'])
            ->where('status', '!=', 'annulee')
            ->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Vehicule déjà réservé'
            ], 400);
        }

        $reservation = Reservation::create($validated);

        return response()->json($reservation, 201);
    }

    public function show(string $id)
    {
        return Reservation::with(['user', 'vehicule'])->findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $reservation = Reservation::findOrFail($id);

        $validated = $request->validate([
            'date_debut' => 'sometimes|date',
            'date_fin' => 'sometimes|date|after:date_debut',
            'prix_total' => 'sometimes|numeric',
            'status' => 'sometimes|in:en_attente,acceptee,refusee,annulee'
        ]);

        $reservation->update($validated);

        return response()->json($reservation);
    }

    public function accepter(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update(['status' => 'acceptee']);

        return response()->json([
            'message' => 'Réservation acceptée',
            'reservation' => $reservation
        ]);
    }

    public function refuser(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update(['status' => 'refusee']);

        return response()->json([
            'message' => 'Réservation refusée',
            'reservation' => $reservation
        ]);
    }

    public function annuler(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update(['status' => 'annulee']);

        return response()->json([
            'message' => 'Réservation annulée',
            'reservation' => $reservation
        ]);
    }

    public function destroy(string $id)
    {
        Reservation::destroy($id);

        return response()->json([
            'message' => 'Reservation supprimée'
        ]);
    }
}