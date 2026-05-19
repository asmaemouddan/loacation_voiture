<?php

namespace App\Http\Controllers;

use App\Models\OcrResult;
use Illuminate\Http\Request;

class OcrResultController extends Controller
{
    public function index()
    {
        return OcrResult::with('document')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'document_id' => 'required|exists:documents,id',
            'nom' => 'nullable|string',
            'prenom' => 'nullable|string',
            'cin' => 'nullable|string',
            'date_naissance' => 'nullable|date',
            'numero_permis' => 'nullable|string',
            'json_result' => 'nullable|array'
        ]);

        $ocrResult = OcrResult::create($validated);

        return response()->json($ocrResult, 201);
    }

    public function show(string $id)
    {
        return OcrResult::with('document')->findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $ocrResult = OcrResult::findOrFail($id);
        $ocrResult->update($request->all());

        return response()->json($ocrResult);
    }

    public function destroy(string $id)
    {
        OcrResult::destroy($id);

        return response()->json([
            'message' => 'Résultat OCR supprimé'
        ]);
    }
}