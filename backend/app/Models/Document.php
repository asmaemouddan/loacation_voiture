<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use App\Models\OcrResult;
class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'type_document',
        'image_path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function ocrResult()
{
    return $this->hasOne(OcrResult::class);
}
}