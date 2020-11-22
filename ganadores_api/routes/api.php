<?php
use Illuminate\Http\Request;
use App\Models\Winner;
use App\Models\Week;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    //return $request->user();
});

Route::get('/weeks', function( ) {
    return Week::all()->where('status', 1);
});
Route::get('/winners/{week_id}', function( $week_id ) {
    return Winner::with('week')->where('week_id', $week_id)->get();
});
