<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$Identificacion = (isset($_POST['Identificacion'])) ? $_POST['Identificacion'] : '';
$BaseRegistro = (isset($_POST['BaseRegistro'])) ? $_POST['BaseRegistro'] : '';
$CodigoInstitucion = (isset($_POST['CodigoInstitucion'])) ? $_POST['CodigoInstitucion'] : '';
$CodigoColeccion = (isset($_POST['CodigoColeccion'])) ? $_POST['CodigoColeccion'] : '';
$NumeroCatalogo = (isset($_POST['NumeroCatalogo'])) ? $_POST['NumeroCatalogo'] : '';
$Tipo = (isset($_POST['Tipo'])) ? $_POST['Tipo'] : '';
$IdInstitucion = (isset($_POST['IdInstitucion'])) ? $_POST['IdInstitucion'] : '';
$IdColeccion = (isset($_POST['IdColeccion'])) ? $_POST['IdColeccion'] : '';
$IdConjuntoDatos = (isset($_POST['IdConjuntoDatos'])) ? $_POST['IdConjuntoDatos'] : '';
$NombreConjuntoDatos = (isset($_POST['NombreConjuntoDatos'])) ? $_POST['NombreConjuntoDatos'] : '';
$NumeroRegistro = (isset($_POST['NumeroRegistro'])) ? $_POST['NumeroRegistro'] : '';
$Registrador = (isset($_POST['Registrador'])) ? $_POST['Registrador'] : '';
$CantidadOrganismo = (isset($_POST['CantidadOrganismo'])) ? $_POST['CantidadOrganismo'] : '';
$TipoCantidad = (isset($_POST['TipoCantidad'])) ? $_POST['TipoCantidad'] : '';
$Sexo = (isset($_POST['Sexo'])) ? $_POST['Sexo'] : '';
$EstadoExistencia = (isset($_POST['EstadoExistencia'])) ? $_POST['EstadoExistencia'] : '';
$Preparativos = (isset($_POST['Preparativos'])) ? $_POST['Preparativos'] : '';
$Disposicion = (isset($_POST['Disposicion'])) ? $_POST['Disposicion'] : '';
$ProtocoloMuestreo = (isset($_POST['ProtocoloMuestreo'])) ? $_POST['ProtocoloMuestreo'] : '';
$Hora = (isset($_POST['Hora'])) ? $_POST['Hora'] : '';
$FechaEvento = (isset($_POST['FechaEvento'])) ? $_POST['FechaEvento'] : '';
$Habitat = (isset($_POST['Habitat'])) ? $_POST['Habitat'] : '';
$NotaEvento = (isset($_POST['NotaEvento'])) ? $_POST['NotaEvento'] : '';
$Continente = (isset($_POST['Continente'])) ? $_POST['Continente'] : '';
$Localizacion = (isset($_POST['Localizacion'])) ? $_POST['Localizacion'] : '';
$Ubicacion = (isset($_POST['Ubicacion'])) ? $_POST['Ubicacion'] : '';
$ElevacionMinima = (isset($_POST['ElevacionMinima'])) ? $_POST['ElevacionMinima'] : '';
$ElevacionMaxima = (isset($_POST['ElevacionMaxima'])) ? $_POST['ElevacionMaxima'] : '';
$Latitud = (isset($_POST['Latitud'])) ? $_POST['Latitud'] : '';
$Longitud = (isset($_POST['Longitud'])) ? $_POST['Longitud'] : '';
$SistemaCoordenadas = (isset($_POST['SistemaCoordenadas'])) ? $_POST['SistemaCoordenadas'] : '';
$SRSliteral = (isset($_POST['SRSliteral'])) ? $_POST['SRSliteral'] : '';
$LatitudDecimal = (isset($_POST['LatitudDecimal'])) ? $_POST['LatitudDecimal'] : '';
$LongitudDecimal = (isset($_POST['LongitudDecimal'])) ? $_POST['LongitudDecimal'] : '';
$DatoGeodesico = (isset($_POST['DatoGeodesico'])) ? $_POST['DatoGeodesico'] : '';
$ProtocoloGeorreferencia = (isset($_POST['ProtocoloGeorreferencia'])) ? $_POST['ProtocoloGeorreferencia'] : '';
$Identificador = (isset($_POST['Identificador'])) ? $_POST['Identificador'] : '';
$FechaIdentificado = (isset($_POST['FechaIdentificado'])) ? $_POST['FechaIdentificado'] : '';
$IdentificacionCalificador = (isset($_POST['IdentificacionCalificador'])) ? $_POST['IdentificacionCalificador'] : '';
$NombreCientifico = (isset($_POST['NombreCientifico'])) ? $_POST['NombreCientifico'] : '';
$Reino = (isset($_POST['Reino'])) ? $_POST['Reino'] : '';
$Filo = (isset($_POST['Filo'])) ? $_POST['Filo'] : '';
$Clase = (isset($_POST['Clase'])) ? $_POST['Clase'] : '';
$Orden = (isset($_POST['Orden'])) ? $_POST['Orden'] : '';
$Familia = (isset($_POST['Familia'])) ? $_POST['Familia'] : '';
$RangoTaxon = (isset($_POST['RangoTaxon'])) ? $_POST['RangoTaxon'] : '';
$EstadoTaxonomico = (isset($_POST['EstadoTaxonomico'])) ? $_POST['EstadoTaxonomico'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO macroinvertebradoseliminados (Identificacion, BaseRegistro, CodigoInstitucion, CodigoColeccion, NumeroCatalogo, Tipo, IdInstitucion, IdColeccion, IdConjuntoDatos, NombreConjuntoDatos, NumeroRegistro, Registrador, CantidadOrganismo, TipoCantidad, Sexo, EstadoExistencia, Preparativos, Disposicion, ProtocoloMuestreo, Hora, FechaEvento, Habitat, NotaEvento, Continente, Localizacion, Ubicacion, ElevacionMinima, ElevacionMaxima, Latitud, Longitud, SistemaCoordenadas, SRSliteral, LatitudDecimal, LongitudDecimal, DatoGeodesico, ProtocoloGeorreferencia, Identificador, FechaIdentificado, IdentificacionCalificador, NombreCientifico, Reino, Filo, Clase, Orden, Familia, RangoTaxon, EstadoTaxonomico) VALUES('$Identificacion','$BaseRegistro','$CodigoInstitucion','$CodigoColeccion','$NumeroCatalogo','$Tipo','$IdInstitucion','$IdColeccion','$IdConjuntoDatos','$NombreConjuntoDatos','$NumeroRegistro','$Registrador','$CantidadOrganismo','$TipoCantidad','$Sexo','$EstadoExistencia','$Preparativos','$Disposicion','$ProtocoloMuestreo','$Hora','$FechaEvento','$Habitat','$NotaEvento','$Continente','$Localizacion','$Ubicacion','$ElevacionMinima','$ElevacionMaxima','$Latitud','$Longitud','$SistemaCoordenadas','$SRSliteral','$LatitudDecimal','$LongitudDecimal','$DatoGeodesico','$ProtocoloGeorreferencia','$Identificador','$FechaIdentificado','$IdentificacionCalificador','$NombreCientifico','$Reino','$Filo','$Clase','$Orden','$Familia','$RangoTaxon','$EstadoTaxonomico') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE macroinvertebradoseliminados SET Identificacion='$Identificacion',BaseRegistro='$BaseRegistro',CodigoInstitucion='$CodigoInstitucion',CodigoColeccion='$CodigoColeccion',NumeroCatalogo='$NumeroCatalogo',Tipo='$Tipo',IdInstitucion='$IdInstitucion',IdColeccion='$IdColeccion',IdConjuntoDatos='$IdConjuntoDatos',NombreConjuntoDatos='$NombreConjuntoDatos',NumeroRegistro='$NumeroRegistro',Registrador='$Registrador',CantidadOrganismo='$CantidadOrganismo',TipoCantidad='$TipoCantidad',Sexo='$Sexo',EstadoExistencia='$EstadoExistencia',Preparativos='$Preparativos',Disposicion='$Disposicion',ProtocoloMuestreo='$ProtocoloMuestreo',Hora='$Hora',FechaEvento='$FechaEvento',Habitat='$Habitat',NotaEvento='$NotaEvento',Continente='$Continente',Localizacion='$Localizacion',Ubicacion='$Ubicacion',ElevacionMinima='$ElevacionMinima',ElevacionMaxima='$ElevacionMaxima',Latitud='$Latitud',Longitud='$Longitud',SistemaCoordenadas='$SistemaCoordenadas',SRSliteral='$SRSliteral',LatitudDecimal='$LatitudDecimal',LongitudDecimal='$LongitudDecimal',DatoGeodesico='$DatoGeodesico',ProtocoloGeorreferencia='$ProtocoloGeorreferencia',Identificador='$Identificador',FechaIdentificado='$FechaIdentificado',IdentificacionCalificador='$IdentificacionCalificador',NombreCientifico='$NombreCientifico',Reino='$Reino',Filo='$Filo',Clase='$Clase',Orden='$Orden',Familia='$Familia',RangoTaxon='$RangoTaxon',EstadoTaxonomico='$EstadoTaxonomico' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM macroinvertebradoseliminados WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, Identificacion, BaseRegistro, CodigoInstitucion, CodigoColeccion, NumeroCatalogo, Tipo, IdInstitucion, IdColeccion, IdConjuntoDatos, NombreConjuntoDatos, NumeroRegistro, Registrador, CantidadOrganismo, TipoCantidad, Sexo, EstadoExistencia, Preparativos, Disposicion, ProtocoloMuestreo, Hora, FechaEvento, Habitat, NotaEvento, Continente, Localizacion, Ubicacion, ElevacionMinima, ElevacionMaxima, Latitud, Longitud, SistemaCoordenadas, SRSliteral, LatitudDecimal, LongitudDecimal, DatoGeodesico, ProtocoloGeorreferencia, Identificador, FechaIdentificado, IdentificacionCalificador, NombreCientifico, Reino, Filo, Clase, Orden, Familia, RangoTaxon, EstadoTaxonomico FROM macroinvertebradoseliminados";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;