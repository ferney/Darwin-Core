<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$Identificacion = (isset($_POST['Identificacion'])) ? $_POST['Identificacion'] : '';
$Orden = (isset($_POST['Orden'])) ? $_POST['Orden'] : '';
$Familia = (isset($_POST['Familia'])) ? $_POST['Familia'] : '';
$Identificador = (isset($_POST['Identificador'])) ? $_POST['Identificador'] : '';
$Registrador = (isset($_POST['Registrador'])) ? $_POST['Registrador'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO etiquetauno (Identificacion, Orden, Familia, Identificador, Registrador) VALUES('$Identificacion', '$Orden', '$Familia', '$Identificador', '$Registrador') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE etiquetauno SET Identificacion='$Identificacion', Orden='$Orden', Familia='$Familia', Identificador='$Identificador', Registrador='$Registrador' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM etiquetauno WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, Identificacion, Orden, Familia, Identificador, Registrador FROM etiquetauno";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
        
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;