<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OcrController extends Controller
{
    public function scan(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png|max:4096',
        ]);

        $image = $request->file('image');

        $ocrUrl = env('OCR_SERVICE_URL', 'http://ocr-service:8001');

        $response = Http::attach(
            'file',
            file_get_contents($image->getRealPath()),
            $image->getClientOriginalName()
        )->post($ocrUrl . '/scan');

        if ($response->failed()) {
            return response()->json([
                'message' => 'Erreur OCR service',
                'error' => $response->body(),
            ], 500);
        }

        return response()->json([
            'message' => 'OCR terminé avec succès',
            'data' => $response->json(),
        ]);
    }
}
