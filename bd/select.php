<?php
	 $host = "localhost";
     $user = "id17856854_macro";
     $pw = "f->3=*khs8IRJF2[";
     $db = "id17856854_macroi";
    
     $con = new mysqli($host,$user,$pw,$db);
    
	    $data = array();
	
		$sql = "SELECT id, CantidadOrganismo, Orden, Familia, NombreCientifico, Identificador, Ubicacion FROM macroinvertebrados";
       
		$ejecutar = $con->query($sql);
		
		while ($row = mysqli_fetch_object($ejecutar)){
		 $data[]=$row;
		}
		echo json_encode($data);
	
	
?>