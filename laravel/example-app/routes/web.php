<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminControler;
Route::get('/', function () {
    return view('welcome');
});
Route::get('abort ',[AdminControler::class,'about'])->name('about');
Route::get('blog',[AdminControler::class,'blog'])->name('blog');
Route::get('create',[AdminControler::class,'create'])->name('create');
Route::post('insert',[AdminControler::class,'insert']);
Route::get('delete/{id}',[AdminControler::class,'delete'])->name('delete');
Route::get('change/{id}',[AdminControler::class,'change'])->name('change');
Route::get('edit/{id}',[AdminControler::class,'edit'])->name('edit');
Route::post('update/{id}',[AdminControler::class,'update'])->name('update');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
