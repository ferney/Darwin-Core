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
    $q = "INSERT INTO macroinvertebrados ( Identificacion, BaseRegistro, CodigoInstitucion , CodigoColeccion, NumeroCatalogo, Tipo, IdInstitucion, IdColeccion, IdConjuntoDatos, NombreConjuntoDatos, NumeroRegistro, Registrador, CantidadOrganismo, TipoCantidad, Sexo, EstadoExistencia, Preparativos, Disposicion, ProtocoloMuestreo, Hora, FechaEvento, Habitat, NotaEvento, Continente, Localizacion, Ubicacion, ElevacionMinima, ElevacionMaxima, Latitud, Longitud, SistemaCoordenadas, SRSliteral, LatitudDecimal, LongitudDecimal, DatoGeodesico, ProtocoloGeorreferencia, Identificador, FechaIdentificado, IdentificacionCalificador, NombreCientifico, Reino, Filo, Clase, Orden, Familia, RangoTaxon, EstadoTaxonomico)  VALUES(	
      '$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]','$data[8]','$data[9]','$data[10]','$data[11]','$data[12]','$data[13]','$data[14]','$data[15]','$data[16]','$data[17]','$data[18]','$data[19]','$data[20]','$data[21]','$data[22]','$data[23]','$data[24]','$data[25]','$data[26]','$data[27]','$data[28]','$data[29]','$data[30]','$data[31]','$data[32]','$data[33]','$data[34]','$data[35]','$data[36]','$data[37]','$data[38]','$data[39]','$data[40]','$data[41]','$data[42]','$data[43]','$data[44]','$data[45]','$data[46]'
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