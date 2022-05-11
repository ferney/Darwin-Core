<?php 

// conexión
$mysqli = @new mysqli('localhost', 'id17856854_macro', 'f->3=*khs8IRJF2[', 'id17856854_macroi');

if (isset($_POST['enviar']))
{
	
  $filename=$_FILES["file"]["name"];
  $info = new SplFileInfo($filename);
  $extension = pathinfo($info->getFilename(), PATHINFO_EXTENSION);

   if($extension == 'csv')
   {
	$filename = $_FILES['file']['tmp_name'];
	$handle = fopen($filename, "r");

	while( ($data = fgetcsv($handle, 1000, ";") ) !== FALSE )
	{
    $q = "INSERT INTO etiquetados ( CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones)  VALUES(	
      '$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]','$data[8]','$data[9]','$data[10]','$data[11]','$data[12]'
    )";

	$mysqli->query($q);
   }

      fclose($handle);
   }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <link rel="shortcut icon" href="#">
   
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>


<form enctype="multipart/form-data" method="post" action="">
<label for="formFile" class="form-label position-relative">Archivo CSV</label>
      <input class="form-control position-relative" type="file" name="file" id="file">
      <input type="submit" value="Enviar" name="enviar" class="btn btn-primary position-relative"/>
</form>



</body>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</html>