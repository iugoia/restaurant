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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('table_id')->constrained('tables');
            $table->timestamp('start_date_time');
            $table->timestamp('end_date_time')->nullable();
            $table->float('reserved_hours')->nullable();
            $table->string('name');
            $table->string('phone');
            $table->text('comment')->nullable();
            $table->timestamps();
//            TODO: решить как будет записываться время окончания бронирования. вариант не делать, официант будет сам ставить столикам статус
//            будущая структура таблицы с заказами (если будет)
//            TODO: при самовывозе будут адреса пунктов, сделать отдельную таблицу для них
//            $table->enum('choice', ['Доставка', 'Самовывоз']);
//            $table->string('address');
//            $table->string('apartment')->nullable();
//            $table->string('entrance')->nullable();
//            $table->string('floor')->nullable();
//            $table->string('intercom')->nullable();
//            $table->integer('persons')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
