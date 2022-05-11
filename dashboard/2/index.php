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
                    <button @click="btnAlta" class="btn btn-success" title="Nuevo"><i class="fas fa-plus-circle"></i></button>
                    <button  class="btn btn-warning" title="Cargar CSV" > <a href="subir.php" target="popup" onclick="window.open('', 'popup', 'width = 400, height = 150')" ><img src="https://img.icons8.com/color/28/000000/import-csv.png"/> </a> </button> 
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
                                <th>ID</th>
                                <th>CodigoColeccion</th>
                                <th>Localizacion</th>
                                <th>Ubicacion</th>
                                <th>Habitat</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>SRSliteral</th>
                                <th>ElevacionMinima</th>
                                <th>ElevacionMaxima</th>
                                <th>FechaEvento</th>
                                <th>Registrador</th>
                                <th>Identificador</th>
                                <th>Observaciones</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(movil,indice) of moviles">
                            <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-secondary" title="Editar" @click="btnEditar(movil.id, movil.CodigoColeccion, movil.Localizacion, movil.Ubicacion, movil.Habitat, movil.Latitud, movil.Longitud, movil.SRSliteral, movil.ElevacionMinima, movil.ElevacionMaxima, movil.FechaEvento, movil.Registrador, movil.Identificador, movil.Observaciones)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(movil.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                <div class="btn-group" role="group">
                                        <button class="btn btn-warning" title="Imprimir" @click="printDiv(movil.id, movil.CodigoColeccion, movil.Localizacion, movil.Ubicacion, movil.Habitat, movil.Latitud, movil.Longitud, movil.SRSliteral, movil.ElevacionMinima, movil.ElevacionMaxima, movil.FechaEvento, movil.Registrador, movil.Identificador, movil.Observaciones)"><i class="fas fa-print"></i></button>
                                        <button class="btn btn-success"  title="Ver" @click="botonVer(movil.id, movil.CodigoColeccion, movil.Localizacion, movil.Ubicacion, movil.Habitat, movil.Latitud, movil.Longitud, movil.SRSliteral, movil.ElevacionMinima, movil.ElevacionMaxima, movil.FechaEvento, movil.Registrador, movil.Identificador, movil.Observaciones)"><i class="fas fa-eye"></i></button>
                                </div>
                                </td>                                
                                <td>{{movil.id}}</td>                                
                                <td>{{movil.CodigoColeccion}}</td>
                                <td>{{movil.Localizacion}}</td>
                                <td>{{movil.Ubicacion}}</td>
                                <td>{{movil.Habitat}}</td>
                                <td>{{movil.Latitud}}</td>
                                <td>{{movil.Longitud}}</td>
                                <td>{{movil.SRSliteral}}</td>
                                <td>{{movil.ElevacionMinima}}</td>
                                <td>{{movil.ElevacionMaxima}}</td>
                                <td>{{movil.FechaEvento}}</td>
                                <td>{{movil.Registrador}}</td>
                                <td>{{movil.Identificador}}</td>
                                <td>{{movil.Observaciones}}</td>
                                
                                
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