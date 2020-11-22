<?php

namespace App\Http\Controllers;
use App\Models\Winner;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fileUpload()
    {
        $this->devAuth();
        return view('admin.fileUpload');
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fileUploadPost(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:txt,csv|max:2048',
        ]);
  
        $fileName = time().'.'.$request->file->getClientOriginalExtension();  
        $request->file->move(public_path('uploads'), $fileName);
        
        $this->read_csv(public_path('uploads')."/".$fileName);
        
        return back()
            ->with('success','Archivo guardado.')
            ->with('file',$fileName);
   
    }

    private function read_csv($file_path){
        if (($gestor = fopen($file_path, "r")) !== FALSE) {
            while (($datos = fgetcsv($gestor, 10000, ",")) !== FALSE) {
                $this->store_winners( $datos[0],$datos[1],$datos[2] );
            }
            fclose($gestor);
        }
    }

    private function store_winners($name, $prize, $week_id){
        $winner = new Winner();
        $winner->name = $name;
        $winner->prize = $prize;
        $winner->week_id = $week_id;
        $winner->save();
    }

    private function devAuth(){
		$php_auth_user = isset($_SERVER['PHP_AUTH_USER'])?$_SERVER['PHP_AUTH_USER']:"";
		$php_auth_pw = isset($_SERVER['PHP_AUTH_PW'])?$_SERVER['PHP_AUTH_PW']:"";
		
		if ( $php_auth_user== "catorce" && $php_auth_pw== "catorce") {	
		}
		else{
			header('WWW-Authenticate: Basic realm="Tang"');
			header('HTTP/1.0 401 Unauthorized');
			echo 'Acceso denegado';
			exit;
		}
	}
}
