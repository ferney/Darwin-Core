<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$CodigoColeccion = (isset($_POST['CodigoColeccion'])) ? $_POST['CodigoColeccion'] : '';
$Localizacion = (isset($_POST['Localizacion'])) ? $_POST['Localizacion'] : '';
$Habitat = (isset($_POST['Habitat'])) ? $_POST['Habitat'] : '';
$Latitud = (isset($_POST['Latitud'])) ? $_POST['Latitud'] : '';
$Longitud = (isset($_POST['Longitud'])) ? $_POST['Longitud'] : '';
$Localizacion = (isset($_POST['Localizacion'])) ? $_POST['Localizacion'] : '';
$SRSliteral = (isset($_POST['SRSliteral'])) ? $_POST['SRSliteral'] : '';
$ElevacionMinima = (isset($_POST['ElevacionMinima'])) ? $_POST['ElevacionMinima'] : '';
$ElevacionMaxima= (isset($_POST['ElevacionMaxima'])) ? $_POST['ElevacionMaxima'] : '';
$FechaEvento = (isset($_POST['FechaEvento'])) ? $_POST['FechaEvento'] : '';
$Registrador = (isset($_POST['Registrador'])) ? $_POST['Registrador'] : '';
$Identificador = (isset($_POST['Identificador'])) ? $_POST['Identificador'] : '';
$Observaciones = (isset($_POST['Observaciones'])) ? $_POST['Observaciones'] : '';




switch($opcion){
    case 1:
        $consulta = "INSERT INTO etiquetados (CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones) VALUES('$CodigoColeccion', '$Localizacion', '$Ubicacion', '$Habitat', '$Latitud', '$Longitud', '$SRSliteral', '$ElevacionMinima', '$ElevacionMaxima', '$FechaEvento', '$Registrador', '$Identificador', '$Observaciones') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;  
    case 2:
        $consulta = "UPDATE etiquetados SET CodigoColeccion='$CodigoColeccion', Localizacion='$Localizacion', Ubicacion='$Ubicacion', Habitat='$Habitat', Latitud='$Latitud', Longitud='$Longitud', SRSliteral='$SRSliteral', ElevacionMinima='$ElevacionMinima', ElevacionMaxima='$ElevacionMaxima', FechaEvento='$FechaEvento', Registrador='$Registrador', Identificador='$Identificador', Observaciones='$Observaciones' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM etiquetados WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones FROM etiquetados";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;