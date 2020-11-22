<!DOCTYPE html>
<html>
<head>
    <title>Trident file upload</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
  
<body>
<div class="container">
   
    <div class="panel panel-primary">
      <div class="panel-heading"><h2>Subir ganadores csv</h2></div>
      <div class="panel-body">
   
        @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
                <strong>{{ $message }}</strong>
                <strong>{{ Session::get('file') }}</strong>
        </div>
        @endif
  
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>error</strong> ocurrio un error al subir el archivo.
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
  
        <form action="{{ route('file.upload.post') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
  
                <div class="col-md-6">
                    <input type="file" name="file" class="form-control">
                </div>
   
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success">Subir</button>
                </div>
   
            </div>
        </form>
  
      </div>
    </div>
</div>
</body>
  
</html>