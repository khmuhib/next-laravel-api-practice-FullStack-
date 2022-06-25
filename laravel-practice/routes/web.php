<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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
//     return view('welcome');
// });

Route::get('/', [PostController::class, 'index']);
Route::get('/add', [PostController::class, 'add']);

Route::post('/add', [PostController::class, 'store']);
Route::get('/edit/{post_id}', [PostController::class, 'edit']);
Route::put('/update/{post_id}', [PostController::class, 'update']);

Route::get('/delete/{post_id}', [PostController::class, 'delete']);
