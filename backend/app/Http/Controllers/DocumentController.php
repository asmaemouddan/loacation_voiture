<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index()
    {
        return Document::with('user')->get();
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'user_id' => 'required|exists:users,id',
        'type_document' => 'required|in:cin,permis',
        'image' => 'required|image|mimes:jpg,jpeg,png|max:2048'
    ]);

    $path = $request->file('image')->store('documents', 'public');

    $document = Document::create([
        'user_id' => $validated['user_id'],
        'type_document' => $validated['type_document'],
        'image_path' => $path
    ]);

    return response()->json([
        'message' => 'Document uploaded successfully',
        'document' => $document,
        'image_url' => asset('storage/' . $path)
    ], 201);
}

    public function show(string $id)
    {
        return Document::with('user')->findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $document = Document::findOrFail($id);

        $document->update($request->all());

        return response()->json($document);
    }

    public function destroy(string $id)
    {
        Document::destroy($id);

        return response()->json([
            'message' => 'Document supprimé'
        ]);
    }
}