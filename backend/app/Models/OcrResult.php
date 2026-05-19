<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Document;

class OcrResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id',
        'nom',
        'prenom',
        'cin',
        'date_naissance',
        'numero_permis',
        'json_result'
    ];

    protected $casts = [
        'json_result' => 'array',
    ];

    public function document()
    {
        return $this->belongsTo(Document::class);
    }
    public function ocrResult()
{
    return $this->hasOne(OcrResult::class);
}
}