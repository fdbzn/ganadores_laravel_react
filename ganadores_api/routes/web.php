<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\WeekController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    // return view('welcome');
// });

Route::get('/admin', [AdminController::class, 'index']);

Route::get('/week/store', [WeekController::class, 'store']);

  
Route::get('/admin/file-upload', [AdminController::class, 'fileUpload'])->name('file.upload');
Route::post('/admin/file-upload', [AdminController::class, 'fileUploadPost'])->name('file.upload.post');