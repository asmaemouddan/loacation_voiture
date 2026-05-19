<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ocr_results', function (Blueprint $table) {
    $table->id();

    $table->foreignId('document_id')
          ->constrained()
          ->onDelete('cascade');

    $table->string('nom')->nullable();
    $table->string('prenom')->nullable();
    $table->string('cin')->nullable();
    $table->date('date_naissance')->nullable();
    $table->string('numero_permis')->nullable();

    $table->json('json_result')->nullable();

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ocr_results');
    }
};
