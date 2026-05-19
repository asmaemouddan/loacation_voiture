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
        Schema::create('vehicules', function (Blueprint $table) {
    $table->id();

    $table->string('marque');
    $table->string('modele');
    $table->string('matricule')->unique();

    $table->decimal('prix_jour', 8, 2);

    $table->string('image')->nullable();

    $table->enum('status', ['disponible', 'indisponible'])
          ->default('disponible');

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};
