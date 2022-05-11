<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->    
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">        
    <!--CSS custom -->  
    <link rel="stylesheet" href="main.css">  
    </head>
    <body>
    <header>
    <div class="row">       
                <div class="col">        
                <a href="../principal.php"><i class="fa fa-home " style="font-size:25px;color:green">inicio</i></a>
                </div>
                <div class="col position-relative">                        
                <h2 class="text-center text-dark"><span class="col position-relative">REGISTRO MACROINVERTEBRADOS</span></h2>
                </div> 
                <div class="col text-right">                        
                <img src="img/logo.png" style="width:50px; height:auto;"/>
                </div>    
            </div>  
    </header>    
    
     <div id="appMoviles">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                   
                   
                </div>
                <div class="col text-right">                        
                    <h5>Total: <span class="badge badge-success">{{totalStock}} Registros</span></h5>
                </div>    
            </div>  
                        
            <div class="row mt-5">
                <div class="col-lg-12"> 
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Buscar...">                   
                <div class="table-wrapper">  
                            
                    <table class="table table-striped" id="miTabla">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th>Acciones</th>
                                <th>Id</th>
                                <th>Identificacion</th>
                                <th>BaseRegistro</th>
                                <th>CodigoInstitucion</th>
                                <th>CodigoColeccion</th>
                                <th>NumeroCatalogo</th>
                                <th>Tipo</th>
                                <th>IdInstitucion</th>
                                <th>IdColeccion</th>
                                <th>IdConjuntoDatos</th>
                                <th>NombreConjuntoDatos</th>
                                <th>NumeroRegistro</th>
                                <th>Registrador</th>
                                <th>CantidadOrganismo</th>
                                <th>TipoCantidad</th>
                                <th>Sexo</th>
                                <th>EstadoExistencia</th>
                                <th>Preparativos</th>
                                <th>Disposicion</th>
                                <th>ProtocoloMuestreo</th>
                                <th>Hora</th>
                                <th>FechaEvento</th>
                                <th>Habitat</th>
                                <th>NotaEvento</th>
                                <th>Continente</th>
                                <th>Localizacion</th>
                                <th>Ubicacion</th>
                                <th>ElevacionMinima</th>
                                <th>ElevacionMaxima</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>SistemaCoordenadas</th>
                                <th>SRSliteral</th>
                                <th>LatitudDecimal</th>
                                <th>LongitudDecimal</th>
                                <th>DatoGeodesico</th>
                                <th>ProtocoloGeorreferencia</th>
                                <th>Identificador</th>
                                <th>FechaIdentificado</th>
                                <th>IdentificacionCalificador</th>
                                <th>NombreCientifico</th>
                                <th>Reino</th>
                                <th>Filo</th>
                                <th>Clase</th>
                                <th>Orden</th>
                                <th>Familia</th>
                                <th>RangoTaxon</th>
                                <th>EstadoTaxonomico</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(movil,indice) of moviles">  
                            <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-secondary" title="Editar" @click="btnEditar(movil.id,movil.Identificacion,movil.BaseRegistro,movil.CodigoInstitucion,movil.CodigoColeccion,movil.NumeroCatalogo,movil.Tipo,movil.IdInstitucion,movil.IdColeccion,movil.IdConjuntoDatos,movil.NombreConjuntoDatos,movil.NumeroRegistro,movil.Registrador,movil.CantidadOrganismo,movil.TipoCantidad,movil.Sexo,movil.EstadoExistencia,movil.Preparativos,movil.Disposicion,movil.ProtocoloMuestreo,movil.Hora,movil.FechaEvento,movil.Habitat,movil.NotaEvento,movil.Continente,movil.Localizacion,movil.Ubicacion,movil.ElevacionMinima,movil.ElevacionMaxima,movil.Latitud,movil.Longitud,movil.SistemaCoordenadas,movil.SRSliteral,movil.LatitudDecimal,movil.LongitudDecimal,movil.DatoGeodesico,movil.ProtocoloGeorreferencia,movil.Identificador,movil.FechaIdentificado,movil.IdentificacionCalificador,movil.NombreCientifico,movil.Reino,movil.Filo,movil.Clase,movil.Orden,movil.Familia,movil.RangoTaxon,movil.EstadoTaxonomico)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(movil.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                <div class="btn-group" role="group">
                                        <button class="btn btn-warning" title="Imprimir" @click="printDiv(movil.id,movil.Identificacion,movil.BaseRegistro,movil.CodigoInstitucion,movil.CodigoColeccion,movil.NumeroCatalogo,movil.Tipo,movil.IdInstitucion,movil.IdColeccion,movil.IdConjuntoDatos,movil.NombreConjuntoDatos,movil.NumeroRegistro,movil.Registrador,movil.CantidadOrganismo,movil.TipoCantidad,movil.Sexo,movil.EstadoExistencia,movil.Preparativos,movil.Disposicion,movil.ProtocoloMuestreo,movil.Hora,movil.FechaEvento,movil.Habitat,movil.NotaEvento,movil.Continente,movil.Localizacion,movil.Ubicacion,movil.ElevacionMinima,movil.ElevacionMaxima,movil.Latitud,movil.Longitud,movil.SistemaCoordenadas,movil.SRSliteral,movil.LatitudDecimal,movil.LongitudDecimal,movil.DatoGeodesico,movil.ProtocoloGeorreferencia,movil.Identificador,movil.FechaIdentificado,movil.IdentificacionCalificador,movil.NombreCientifico,movil.Reino,movil.Filo,movil.Clase,movil.Orden,movil.Familia,movil.RangoTaxon,movil.EstadoTaxonomico)"><i class="fas fa-print"></i></button>
                                        <button class="btn btn-success"  title="Ver" @click="botonVer(movil.id,movil.Identificacion,movil.BaseRegistro,movil.CodigoInstitucion,movil.CodigoColeccion,movil.NumeroCatalogo,movil.Tipo,movil.IdInstitucion,movil.IdColeccion,movil.IdConjuntoDatos,movil.NombreConjuntoDatos,movil.NumeroRegistro,movil.Registrador,movil.CantidadOrganismo,movil.TipoCantidad,movil.Sexo,movil.EstadoExistencia,movil.Preparativos,movil.Disposicion,movil.ProtocoloMuestreo,movil.Hora,movil.FechaEvento,movil.Habitat,movil.NotaEvento,movil.Continente,movil.Localizacion,movil.Ubicacion,movil.ElevacionMinima,movil.ElevacionMaxima,movil.Latitud,movil.Longitud,movil.SistemaCoordenadas,movil.SRSliteral,movil.LatitudDecimal,movil.LongitudDecimal,movil.DatoGeodesico,movil.ProtocoloGeorreferencia,movil.Identificador,movil.FechaIdentificado,movil.IdentificacionCalificador,movil.NombreCientifico,movil.Reino,movil.Filo,movil.Clase,movil.Orden,movil.Familia,movil.RangoTaxon,movil.EstadoTaxonomico)"><i class="fas fa-eye"></i></button>
                                </div>
                                </td>                              
                                <td>{{movil.id}}</td>
                                <td>{{movil.Identificacion}}</td>
                                <td>{{movil.BaseRegistro}}</td>
                                <td>{{movil.CodigoInstitucion}}</td>
                                <td>{{movil.CodigoColeccion}}</td>
                                <td>{{movil.NumeroCatalogo}}</td>
                                <td>{{movil.Tipo}}</td>
                                <td>{{movil.IdInstitucion}}</td>
                                <td>{{movil.IdColeccion}}</td>
                                <td>{{movil.IdConjuntoDatos}}</td>
                                <td>{{movil.NombreConjuntoDatos}}</td>
                                <td>{{movil.NumeroRegistro}}</td>
                                <td>{{movil.Registrador}}</td>
                                <td>{{movil.CantidadOrganismo}}</td>
                                <td>{{movil.TipoCantidad}}</td>
                                <td>{{movil.Sexo}}</td>
                                <td>{{movil.EstadoExistencia}}</td>
                                <td>{{movil.Preparativos}}</td>
                                <td>{{movil.Disposicion}}</td>
                                <td>{{movil.ProtocoloMuestreo}}</td>
                                <td>{{movil.Hora}}</td>
                                <td>{{movil.FechaEvento}}</td>
                                <td>{{movil.Habitat}}</td>
                                <td>{{movil.NotaEvento}}</td>
                                <td>{{movil.Continente}}</td>
                                <td>{{movil.Localizacion}}</td>
                                <td>{{movil.Ubicacion}}</td>
                                <td>{{movil.ElevacionMinima}}</td>
                                <td>{{movil.ElevacionMaxima}}</td>
                                <td>{{movil.Latitud}}</td>
                                <td>{{movil.Longitud}}</td>
                                <td>{{movil.SistemaCoordenadas}}</td>
                                <td>{{movil.SRSliteral}}</td>
                                <td>{{movil.LatitudDecimal}}</td>
                                <td>{{movil.LongitudDecimal}}</td>
                                <td>{{movil.DatoGeodesico}}</td>
                                <td>{{movil.ProtocoloGeorreferencia}}</td>
                                <td>{{movil.Identificador}}</td>
                                <td>{{movil.FechaIdentificado}}</td>
                                <td>{{movil.IdentificacionCalificador}}</td>
                                <td>{{movil.NombreCientifico}}</td>
                                <td>{{movil.Reino}}</td>
                                <td>{{movil.Filo}}</td>
                                <td>{{movil.Clase}}</td>
                                <td>{{movil.Orden}}</td>
                                <td>{{movil.Familia}}</td>
                                <td>{{movil.RangoTaxon}}</td>
                                <td>{{movil.EstadoTaxonomico}}</td>
                                
                                
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
                </div>
            </div>
        </div>        
    </div>        
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
    <!--Vue.JS -->    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Sweet Alert 2 -->        
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>      
    <!--Código custom -->          
    <script src="main.js"></script>         
    </body>
</html>