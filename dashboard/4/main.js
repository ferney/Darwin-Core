var url = "bd/crud.php";

var appMoviles = new Vue({    
el: "#appMoviles",   
data:{     
     moviles:[],          
     Identificacion:"",
     BaseRegistro:"",
     CodigoInstitucion:"",
     CodigoColeccion:"",
     NumeroCatalogo:"",
     Tipo:"",
     IdInstitucion:"",
     IdColeccion:"",
     IdConjuntoDatos:"",
     NombreConjuntoDatos:"",
     NumeroRegistro:"",
     Registrador:"",
     CantidadOrganismo:"",
     TipoCantidad:"",
     Sexo:"",
     EstadoExistencia:"",
     Preparativos:"",
     Disposicion:"",
     ProtocoloMuestreo:"",
     Hora:"",
     FechaEvento:"",
     Habitat:"",
     NotaEvento:"",
     Continente:"",
     Localizacion:"",
     Ubicacion:"",
     ElevacionMinima:"",
     ElevacionMaxima:"",
     Latitud:"",
     Longitud:"",
     SistemaCoordenadas:"",
     SRSliteral:"",
     LatitudDecimal:"",
     LongitudDecimal:"",
     DatoGeodesico:"",
     ProtocoloGeorreferencia:"",
     Identificador:"",
     FechaIdentificado:"",
     IdentificacionCalificador:"",
     NombreCientifico:"",
     Reino:"",
     Filo:"",
     Clase:"",
     Orden:"",
     Familia:"",
     RangoTaxon:"",
     EstadoTaxonomico:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<input id="Identificacion" type="text" class="form-control" placeholder="Identificacion"><br>'+
        '<input id="BaseRegistro" type="text" class="form-control" placeholder="BaseRegistro"><br>'+
        '<input id="CodigoInstitucion" type="text" class="form-control" placeholder="CodigoInstitucion"><br>'+
        '<input id="CodigoColeccion" type="text" class="form-control" placeholder="CodigoColeccion"><br>'+
        '<input id="NumeroCatalogo" type="text" class="form-control" placeholder="NumeroCatalogo"><br>'+
        '<input id="Tipo" type="text" class="form-control" placeholder="Tipo"><br>'+
        '<input id="IdInstitucion" type="text" class="form-control" placeholder="IdInstitucion"><br>'+
        '<input id="IdColeccion" type="text" class="form-control" placeholder="IdColeccion"><br>'+
        '<input id="IdConjuntoDatos" type="text" class="form-control" placeholder="IdConjuntoDatos"><br>'+
        '<input id="NombreConjuntoDatos" type="text" class="form-control" placeholder="NombreConjuntoDatos"><br>'+
        '<input id="NumeroRegistro" type="text" class="form-control" placeholder="NumeroRegistro"><br>'+
        '<input id="Registrador" type="text" class="form-control" placeholder="Registrador"><br>'+
        '<input id="CantidadOrganismo" type="number" class="form-control" placeholder="CantidadOrganismo"><br>'+
        '<input id="TipoCantidad" type="text" class="form-control" placeholder="TipoCantidad"><br>'+
        '<input id="Sexo" type="text" class="form-control" placeholder="Sexo"><br>'+
        '<input id="EstadoExistencia" type="text" class="form-control" placeholder="EstadoExistencia"><br>'+
        '<input id="Preparativos" type="text" class="form-control" placeholder="Preparativos"><br>'+
        '<input id="Disposicion" type="text" class="form-control" placeholder="Disposicion"><br>'+
        '<input id="ProtocoloMuestreo" type="text" class="form-control" placeholder="ProtocoloMuestreo"><br>'+
        '<input id="Hora" type="time" class="form-control" placeholder="Hora"><br>'+
        '<input id="FechaEvento" type="datetime-local" class="form-control" placeholder="FechaEvento"><br>'+
        '<input id="Habitat" type="text" class="form-control" placeholder="Habitat"><br>'+
        '<input id="NotaEvento" type="text" class="form-control" placeholder="NotaEvento"><br>'+
        '<input id="Continente" type="text" class="form-control" placeholder="Continente"><br>'+
        '<input id="Localizacion" type="text" class="form-control" placeholder="Localizacion"><br>'+
        '<input id="Ubicacion" type="text" class="form-control" placeholder="Ubicacion"><br>'+
        '<input id="ElevacionMinima" type="number" class="form-control" placeholder="ElevacionMinima"><br>'+
        '<input id="ElevacionMaxima" type="number" class="form-control" placeholder="ElevacionMaxima"><br>'+
        '<input id="Latitud" type="number" class="form-control" placeholder="Latitud"><br>'+
        '<input id="Longitud" type="number" class="form-control" placeholder="Longitud"><br>'+
        '<input id="SistemaCoordenadas" type="text" class="form-control" placeholder="SistemaCoordenadas"><br>'+
        '<input id="SRSliteral" type="text" class="form-control" placeholder="SRSliteral"><br>'+
        '<input id="LatitudDecimal" type="number" class="form-control" placeholder="LatitudDecimal"><br>'+
        '<input id="LongitudDecimal" type="number" class="form-control" placeholder="LongitudDecimal"><br>'+
        '<input id="DatoGeodesico" type="text" class="form-control" placeholder="DatoGeodesico"><br>'+
        '<input id="ProtocoloGeorreferencia" type="text" class="form-control" placeholder="ProtocoloGeorreferencia"><br>'+
        '<input id="Identificador" type="text" class="form-control" placeholder="Identificador"><br>'+
        '<input id="FechaIdentificado" type="date" class="form-control" placeholder="FechaIdentificado"><br>'+
        '<input id="IdentificacionCalificador" type="text" class="form-control" placeholder="IdentificacionCalificador"><br>'+
        '<input id="NombreCientifico" type="text" class="form-control" placeholder="NombreCientifico"><br>'+
        '<input id="Reino" type="text" class="form-control" placeholder="Reino"><br>'+
        '<input id="Filo" type="text" class="form-control" placeholder="Filo"><br>'+
        '<input id="Clase" type="text" class="form-control" placeholder="Clase"><br>'+
        '<input id="Orden" type="text" class="form-control" placeholder="Orden"><br>'+
        '<input id="Familia" type="text" class="form-control" placeholder="Familia"><br>'+
        '<input id="RangoTaxon" type="text" class="form-control" placeholder="RangoTaxon"><br>'+
        '<input id="EstadoTaxonomico" type="text" class="form-control" placeholder="EstadoTaxonomico">',              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Identificacion = document.getElementById('Identificacion').value,
              this.BaseRegistro = document.getElementById('BaseRegistro').value,
              this.CodigoInstitucion = document.getElementById('CodigoInstitucion').value,
              this.CodigoColeccion = document.getElementById('CodigoColeccion').value,
              this.NumeroCatalogo = document.getElementById('NumeroCatalogo').value,
              this.Tipo = document.getElementById('Tipo').value,
              this.IdInstitucion = document.getElementById('IdInstitucion').value,
              this.IdColeccion = document.getElementById('IdColeccion').value,
              this.IdConjuntoDatos = document.getElementById('IdConjuntoDatos').value,
              this.NombreConjuntoDatos = document.getElementById('NombreConjuntoDatos').value,
              this.NumeroRegistro = document.getElementById('NumeroRegistro').value,
              this.Registrador = document.getElementById('Registrador').value,
              this.CantidadOrganismo = document.getElementById('CantidadOrganismo').value,
              this.TipoCantidad = document.getElementById('TipoCantidad').value,
              this.Sexo = document.getElementById('Sexo').value,
              this.EstadoExistencia = document.getElementById('EstadoExistencia').value,
              this.Preparativos = document.getElementById('Preparativos').value,
              this.Disposicion = document.getElementById('Disposicion').value,
              this.ProtocoloMuestreo = document.getElementById('ProtocoloMuestreo').value,
              this.Hora = document.getElementById('Hora').value,
              this.FechaEvento = document.getElementById('FechaEvento').value,
              this.Habitat = document.getElementById('Habitat').value,
              this.NotaEvento = document.getElementById('NotaEvento').value,
              this.Continente = document.getElementById('Continente').value,
              this.Localizacion = document.getElementById('Localizacion').value,
              this.Ubicacion = document.getElementById('Ubicacion').value,
              this.ElevacionMinima = document.getElementById('ElevacionMinima').value,
              this.ElevacionMaxima = document.getElementById('ElevacionMaxima').value,
              this.Latitud = document.getElementById('Latitud').value,
              this.Longitud = document.getElementById('Longitud').value,
              this.SistemaCoordenadas = document.getElementById('SistemaCoordenadas').value,
              this.SRSliteral = document.getElementById('SRSliteral').value,
              this.LatitudDecimal = document.getElementById('LatitudDecimal').value,
              this.LongitudDecimal = document.getElementById('LongitudDecimal').value,
              this.DatoGeodesico = document.getElementById('DatoGeodesico').value,
              this.ProtocoloGeorreferencia = document.getElementById('ProtocoloGeorreferencia').value,
              this.Identificador = document.getElementById('Identificador').value,
              this.FechaIdentificado = document.getElementById('FechaIdentificado').value,
              this.IdentificacionCalificador = document.getElementById('IdentificacionCalificador').value,
              this.NombreCientifico = document.getElementById('NombreCientifico').value,
              this.Reino = document.getElementById('Reino').value,
              this.Filo = document.getElementById('Filo').value,
              this.Clase = document.getElementById('Clase').value,
              this.Orden = document.getElementById('Orden').value,
              this.Familia = document.getElementById('Familia').value,
              this.RangoTaxon = document.getElementById('RangoTaxon').value,
              this.EstadoTaxonomico = document.getElementById('EstadoTaxonomico').value                    
            ]
          }
        })        
        if(this.Identificacion== "" ||this.BaseRegistro== "" ||this.CodigoInstitucion== "" ||this.CodigoColeccion== "" ||this.NumeroCatalogo== "" ||this.Tipo== "" ||this.IdInstitucion== "" ||this.IdColeccion== "" ||this.IdConjuntoDatos== "" ||this.NombreConjuntoDatos== "" ||this.NumeroRegistro== "" ||this.Registrador== "" ||this.CantidadOrganismo== "" ||this.TipoCantidad== "" ||this.Sexo== "" ||this.EstadoExistencia== "" ||this.Preparativos== "" ||this.Disposicion== "" ||this.ProtocoloMuestreo== "" ||this.Hora== "" ||this.FechaEvento== "" ||this.Habitat== "" ||this.NotaEvento== "" ||this.Continente== "" ||this.Localizacion== "" ||this.Ubicacion== "" ||this.ElevacionMinima== "" ||this.ElevacionMaxima== "" ||this.Latitud== "" ||this.Longitud== "" ||this.SistemaCoordenadas== "" ||this.SRSliteral== "" ||this.LatitudDecimal== "" ||this.LongitudDecimal== "" ||this.DatoGeodesico== "" ||this.ProtocoloGeorreferencia== "" ||this.Identificador== "" ||this.FechaIdentificado== "" ||this.IdentificacionCalificador== "" ||this.NombreCientifico== "" ||this.Reino== "" ||this.Filo== "" ||this.Clase== "" ||this.Orden== "" ||this.Familia== "" ||this.RangoTaxon== "" ||this.EstadoTaxonomico== "" ){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.altaMovil();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id, Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion,NumeroCatalogo,Tipo,IdInstitucion,IdColeccion,IdConjuntoDatos,NombreConjuntoDatos,NumeroRegistro,Registrador,CantidadOrganismo,TipoCantidad,Sexo,EstadoExistencia,Preparativos,Disposicion,ProtocoloMuestreo,Hora,FechaEvento,Habitat,NotaEvento,Continente,Localizacion,Ubicacion,ElevacionMinima,ElevacionMaxima,Latitud,Longitud,SistemaCoordenadas,SRSliteral,LatitudDecimal,LongitudDecimal,DatoGeodesico,ProtocoloGeorreferencia,Identificador,FechaIdentificado,IdentificacionCalificador,NombreCientifico,Reino,Filo,Clase,Orden,Familia,RangoTaxon,EstadoTaxonomico){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<input id="id" value="'+id+'" type="text" class="form-control" disabled><br>'+
        '<input id="Identificacion" value="'+Identificacion+'" type="text" class="form-control"><br>'+
        '<input id="BaseRegistro" value="'+BaseRegistro+'" type="text" class="form-control"><br>'+
        '<input id="CodigoInstitucion" value="'+CodigoInstitucion+'" type="text" class="form-control"><br>'+
        '<input id="CodigoColeccion" value="'+CodigoColeccion+'" type="text" class="form-control"><br>'+
        '<input id="NumeroCatalogo" value="'+NumeroCatalogo+'" type="text" class="form-control"><br>'+
        '<input id="Tipo" value="'+Tipo+'" type="text" class="form-control"><br>'+
        '<input id="IdInstitucion" value="'+IdInstitucion+'" type="text" class="form-control"><br>'+
        '<input id="IdColeccion" value="'+IdColeccion+'" type="text" class="form-control"><br>'+
        '<input id="IdConjuntoDatos" value="'+IdConjuntoDatos+'" type="text" class="form-control"><br>'+
        '<input id="NombreConjuntoDatos" value="'+NombreConjuntoDatos+'" type="text" class="form-control"><br>'+
        '<input id="NumeroRegistro" value="'+NumeroRegistro+'" type="text" class="form-control"><br>'+
        '<input id="Registrador" value="'+Registrador+'" type="text" class="form-control"><br>'+
        '<input id="CantidadOrganismo" value="'+CantidadOrganismo+'" type="text" class="form-control"><br>'+
        '<input id="TipoCantidad" value="'+TipoCantidad+'" type="text" class="form-control"><br>'+
        '<input id="Sexo" value="'+Sexo+'" type="text" class="form-control"><br>'+
        '<input id="EstadoExistencia" value="'+EstadoExistencia+'" type="text" class="form-control"><br>'+
        '<input id="Preparativos" value="'+Preparativos+'" type="text" class="form-control"><br>'+
        '<input id="Disposicion" value="'+Disposicion+'" type="text" class="form-control"><br>'+
        '<input id="ProtocoloMuestreo" value="'+ProtocoloMuestreo+'" type="text" class="form-control"><br>'+
        '<input id="Hora" value="'+Hora+'" type="text" class="form-control"><br>'+
        '<input id="FechaEvento" value="'+FechaEvento+'" type="text" class="form-control"><br>'+
        '<input id="Habitat" value="'+Habitat+'" type="text" class="form-control"><br>'+
        '<input id="NotaEvento" value="'+NotaEvento+'" type="text" class="form-control"><br>'+
        '<input id="Continente" value="'+Continente+'" type="text" class="form-control"><br>'+
        '<input id="Localizacion" value="'+Localizacion+'" type="text" class="form-control"><br>'+
        '<input id="Ubicacion" value="'+Ubicacion+'" type="text" class="form-control"><br>'+
        '<input id="ElevacionMinima" value="'+ElevacionMinima+'" type="text" class="form-control"><br>'+
        '<input id="ElevacionMaxima" value="'+ElevacionMaxima+'" type="text" class="form-control"><br>'+
        '<input id="Latitud" value="'+Latitud+'" type="text" class="form-control"><br>'+
        '<input id="Longitud" value="'+Longitud+'" type="text" class="form-control"><br>'+
        '<input id="SistemaCoordenadas" value="'+SistemaCoordenadas+'" type="text" class="form-control"><br>'+
        '<input id="SRSliteral" value="'+SRSliteral+'" type="text" class="form-control"><br>'+
        '<input id="LatitudDecimal" value="'+LatitudDecimal+'" type="text" class="form-control"><br>'+
        '<input id="LongitudDecimal" value="'+LongitudDecimal+'" type="text" class="form-control"><br>'+
        '<input id="DatoGeodesico" value="'+DatoGeodesico+'" type="text" class="form-control"><br>'+
        '<input id="ProtocoloGeorreferencia" value="'+ProtocoloGeorreferencia+'" type="text" class="form-control"><br>'+
        '<input id="Identificador" value="'+Identificador+'" type="text" class="form-control"><br>'+
        '<input id="FechaIdentificado" value="'+FechaIdentificado+'" type="text" class="form-control"><br>'+
        '<input id="IdentificacionCalificador" value="'+IdentificacionCalificador+'" type="text" class="form-control"><br>'+
        '<input id="NombreCientifico" value="'+NombreCientifico+'" type="text" class="form-control"><br>'+
        '<input id="Reino" value="'+Reino+'" type="text" class="form-control"><br>'+
        '<input id="Filo" value="'+Filo+'" type="text" class="form-control"><br>'+
        '<input id="Clase" value="'+Clase+'" type="text" class="form-control"><br>'+
        '<input id="Orden" value="'+Orden+'" type="text" class="form-control"><br>'+
        '<input id="Familia" value="'+Familia+'" type="text" class="form-control"><br>'+
        '<input id="RangoTaxon" value="'+RangoTaxon+'" type="text" class="form-control"><br>'+
        '<input id="EstadoTaxonomico" value="'+EstadoTaxonomico+'" type="text" class="form-control"><br>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            Identificacion= document.getElementById('Identificacion').value,
            BaseRegistro= document.getElementById('BaseRegistro').value,
            CodigoInstitucion= document.getElementById('CodigoInstitucion').value,
            CodigoColeccion= document.getElementById('CodigoColeccion').value,
            NumeroCatalogo= document.getElementById('NumeroCatalogo').value,
            Tipo= document.getElementById('Tipo').value,
            IdInstitucion= document.getElementById('IdInstitucion').value,
            IdColeccion= document.getElementById('IdColeccion').value,
            IdConjuntoDatos= document.getElementById('IdConjuntoDatos').value,
            NombreConjuntoDatos= document.getElementById('NombreConjuntoDatos').value,
            NumeroRegistro= document.getElementById('NumeroRegistro').value,
            Registrador= document.getElementById('Registrador').value,
            CantidadOrganismo= document.getElementById('CantidadOrganismo').value,
            TipoCantidad= document.getElementById('TipoCantidad').value,
            Sexo= document.getElementById('Sexo').value,
            EstadoExistencia= document.getElementById('EstadoExistencia').value,
            Preparativos= document.getElementById('Preparativos').value,
            Disposicion= document.getElementById('Disposicion').value,
            ProtocoloMuestreo= document.getElementById('ProtocoloMuestreo').value,
            Hora= document.getElementById('Hora').value,
            FechaEvento= document.getElementById('FechaEvento').value,
            Habitat= document.getElementById('Habitat').value,
            NotaEvento= document.getElementById('NotaEvento').value,
            Continente= document.getElementById('Continente').value,
            Localizacion= document.getElementById('Localizacion').value,
            Ubicacion= document.getElementById('Ubicacion').value,
            ElevacionMinima= document.getElementById('ElevacionMinima').value,
            ElevacionMaxima= document.getElementById('ElevacionMaxima').value,
            Latitud= document.getElementById('Latitud').value,
            Longitud= document.getElementById('Longitud').value,
            SistemaCoordenadas= document.getElementById('SistemaCoordenadas').value,
            SRSliteral= document.getElementById('SRSliteral').value,
            LatitudDecimal= document.getElementById('LatitudDecimal').value,
            LongitudDecimal= document.getElementById('LongitudDecimal').value,
            DatoGeodesico= document.getElementById('DatoGeodesico').value,
            ProtocoloGeorreferencia= document.getElementById('ProtocoloGeorreferencia').value,
            Identificador= document.getElementById('Identificador').value,
            FechaIdentificado= document.getElementById('FechaIdentificado').value,
            IdentificacionCalificador= document.getElementById('IdentificacionCalificador').value,
            NombreCientifico= document.getElementById('NombreCientifico').value,
            Reino= document.getElementById('Reino').value,
            Filo= document.getElementById('Filo').value,
            Clase= document.getElementById('Clase').value,
            Orden= document.getElementById('Orden').value,
            Familia= document.getElementById('Familia').value,
            RangoTaxon= document.getElementById('RangoTaxon').value,
            EstadoTaxonomico= document.getElementById('EstadoTaxonomico').value,                    
            
            this.editarMovil(id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion,NumeroCatalogo,Tipo,IdInstitucion,IdColeccion,IdConjuntoDatos,NombreConjuntoDatos,NumeroRegistro,Registrador,CantidadOrganismo,TipoCantidad,Sexo,EstadoExistencia,Preparativos,Disposicion,ProtocoloMuestreo,Hora,FechaEvento,Habitat,NotaEvento,Continente,Localizacion,Ubicacion,ElevacionMinima,ElevacionMaxima,Latitud,Longitud,SistemaCoordenadas,SRSliteral,LatitudDecimal,LongitudDecimal,DatoGeodesico,ProtocoloGeorreferencia,Identificador,FechaIdentificado,IdentificacionCalificador,NombreCientifico,Reino,Filo,Clase,Orden,Familia,RangoTaxon,EstadoTaxonomico);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borrarMovil(id);             
            //y mostramos un msj sobre la eliminación  
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para el CRUD     
    listarMoviles:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.moviles = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaMovil:function(){
        axios.post(url, {opcion:1, Identificacion:this.Identificacion,BaseRegistro:this.BaseRegistro,CodigoInstitucion:this.CodigoInstitucion,CodigoColeccion:this.CodigoColeccion,NumeroCatalogo:this.NumeroCatalogo,Tipo:this.Tipo,IdInstitucion:this.IdInstitucion,IdColeccion:this.IdColeccion,IdConjuntoDatos:this.IdConjuntoDatos,NombreConjuntoDatos:this.NombreConjuntoDatos,NumeroRegistro:this.NumeroRegistro,Registrador:this.Registrador,CantidadOrganismo:this.CantidadOrganismo,TipoCantidad:this.TipoCantidad,Sexo:this.Sexo,EstadoExistencia:this.EstadoExistencia,Preparativos:this.Preparativos,Disposicion:this.Disposicion,ProtocoloMuestreo:this.ProtocoloMuestreo,Hora:this.Hora,FechaEvento:this.FechaEvento,Habitat:this.Habitat,NotaEvento:this.NotaEvento,Continente:this.Continente,Localizacion:this.Localizacion,Ubicacion:this.Ubicacion,ElevacionMinima:this.ElevacionMinima,ElevacionMaxima:this.ElevacionMaxima,Latitud:this.Latitud,Longitud:this.Longitud,SistemaCoordenadas:this.SistemaCoordenadas,SRSliteral:this.SRSliteral,LatitudDecimal:this.LatitudDecimal,LongitudDecimal:this.LongitudDecimal,DatoGeodesico:this.DatoGeodesico,ProtocoloGeorreferencia:this.ProtocoloGeorreferencia,Identificador:this.Identificador,FechaIdentificado:this.FechaIdentificado,IdentificacionCalificador:this.IdentificacionCalificador,NombreCientifico:this.NombreCientifico,Reino:this.Reino,Filo:this.Filo,Clase:this.Clase,Orden:this.Orden,Familia:this.Familia,RangoTaxon:this.RangoTaxon,EstadoTaxonomico:this.EstadoTaxonomico }).then(response =>{
            this.listarMoviles();
        });        
        this.Identificacion= "",
        this.BaseRegistro= "",
        this.CodigoInstitucion= "",
        this.CodigoColeccion= "",
        this.NumeroCatalogo= "",
        this.Tipo= "",
        this.IdInstitucion= "",
        this.IdColeccion= "",
        this.IdConjuntoDatos= "",
        this.NombreConjuntoDatos= "",
        this.NumeroRegistro= "",
        this.Registrador= "",
        this.CantidadOrganismo= "",
        this.TipoCantidad= "",
        this.Sexo= "",
        this.EstadoExistencia= "",
        this.Preparativos= "",
        this.Disposicion= "",
        this.ProtocoloMuestreo= "",
        this.Hora= "",
        this.FechaEvento= "",
        this.Habitat= "",
        this.NotaEvento= "",
        this.Continente= "",
        this.Localizacion= "",
        this.Ubicacion= "",
        this.ElevacionMinima= "",
        this.ElevacionMaxima= "",
        this.Latitud= "",
        this.Longitud= "",
        this.SistemaCoordenadas= "",
        this.SRSliteral= "",
        this.LatitudDecimal= "",
        this.LongitudDecimal= "",
        this.DatoGeodesico= "",
        this.ProtocoloGeorreferencia= "",
        this.Identificador= "",
        this.FechaIdentificado= "",
        this.IdentificacionCalificador= "",
        this.NombreCientifico= "",
        this.Reino= "",
        this.Filo= "",
        this.Clase= "",
        this.Orden= "",
        this.Familia= "",
        this.RangoTaxon= "",
        this.EstadoTaxonomico= ""
    },               
    //Procedimiento EDITAR.
    editarMovil:function(id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion,NumeroCatalogo,Tipo,IdInstitucion,IdColeccion,IdConjuntoDatos,NombreConjuntoDatos,NumeroRegistro,Registrador,CantidadOrganismo,TipoCantidad,Sexo,EstadoExistencia,Preparativos,Disposicion,ProtocoloMuestreo,Hora,FechaEvento,Habitat,NotaEvento,Continente,Localizacion,Ubicacion,ElevacionMinima,ElevacionMaxima,Latitud,Longitud,SistemaCoordenadas,SRSliteral,LatitudDecimal,LongitudDecimal,DatoGeodesico,ProtocoloGeorreferencia,Identificador,FechaIdentificado,IdentificacionCalificador,NombreCientifico,Reino,Filo,Clase,Orden,Familia,RangoTaxon,EstadoTaxonomico){       
       axios.post(url, {opcion:2, id:id, Identificacion:Identificacion,BaseRegistro:BaseRegistro,CodigoInstitucion:CodigoInstitucion,CodigoColeccion:CodigoColeccion,NumeroCatalogo:NumeroCatalogo,Tipo:Tipo,IdInstitucion:IdInstitucion,IdColeccion:IdColeccion,IdConjuntoDatos:IdConjuntoDatos,NombreConjuntoDatos:NombreConjuntoDatos,NumeroRegistro:NumeroRegistro,Registrador:Registrador,CantidadOrganismo:CantidadOrganismo,TipoCantidad:TipoCantidad,Sexo:Sexo,EstadoExistencia:EstadoExistencia,Preparativos:Preparativos,Disposicion:Disposicion,ProtocoloMuestreo:ProtocoloMuestreo,Hora:Hora,FechaEvento:FechaEvento,Habitat:Habitat,NotaEvento:NotaEvento,Continente:Continente,Localizacion:Localizacion,Ubicacion:Ubicacion,ElevacionMinima:ElevacionMinima,ElevacionMaxima:ElevacionMaxima,Latitud:Latitud,Longitud:Longitud,SistemaCoordenadas:SistemaCoordenadas,SRSliteral:SRSliteral,LatitudDecimal:LatitudDecimal,LongitudDecimal:LongitudDecimal,DatoGeodesico:DatoGeodesico,ProtocoloGeorreferencia:ProtocoloGeorreferencia,Identificador:Identificador,FechaIdentificado:FechaIdentificado,IdentificacionCalificador:IdentificacionCalificador,NombreCientifico:NombreCientifico,Reino:Reino,Filo:Filo,Clase:Clase,Orden:Orden,Familia:Familia,RangoTaxon:RangoTaxon,EstadoTaxonomico:EstadoTaxonomico }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarMovil:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarMoviles();
            });
    },
    
    printDiv:async function(id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion,NumeroCatalogo,Tipo,IdInstitucion,IdColeccion,IdConjuntoDatos,NombreConjuntoDatos,NumeroRegistro,Registrador,CantidadOrganismo,TipoCantidad,Sexo,EstadoExistencia,Preparativos,Disposicion,ProtocoloMuestreo,Hora,FechaEvento,Habitat,NotaEvento,Continente,Localizacion,Ubicacion,ElevacionMinima,ElevacionMaxima,Latitud,Longitud,SistemaCoordenadas,SRSliteral,LatitudDecimal,LongitudDecimal,DatoGeodesico,ProtocoloGeorreferencia,Identificador,FechaIdentificado,IdentificacionCalificador,NombreCientifico,Reino,Filo,Clase,Orden,Familia,RangoTaxon,EstadoTaxonomico){ 
      var newWin=window.open('','Print-Window');
      newWin.document.open();
      newWin.document.write('<html><body onload="window.print()" ><table><tr><td><img src="img/logo.png" width="30" height="30" ></td><td style="font-size: 4px;">Id: '+id+', Identificacion: '+Identificacion+', BaseRegistro: '+BaseRegistro+',<br>CodigoInstitucion: '+CodigoInstitucion+',<br>CodigoColeccion: '+CodigoColeccion+', NumeroCatalogo: '+NumeroCatalogo+', Tipo: '+Tipo+',<br>IdInstitucion: '+IdInstitucion+', IdColeccion: '+IdColeccion+', IdConjuntoDatos: '+IdConjuntoDatos+',<br> NombreConjuntoDatos: '+NombreConjuntoDatos+', NumeroRegistro: '+NumeroRegistro+', <br>Registrador: '+Registrador+', CantidadOrganismo: '+CantidadOrganismo+', TipoCantidad: '+TipoCantidad+', <br>Sexo: '+Sexo+', EstadoExistencia: '+EstadoExistencia+', Preparativos: '+Preparativos+', <br> Disposicion: '+Disposicion+', ProtocoloMuestreo: '+ProtocoloMuestreo+', Hora: '+Hora+',<br> FechaEvento: '+FechaEvento+', Habitat: '+Habitat+', NotaEvento: '+NotaEvento+',<br> Continente: '+Continente+', Localizacion: '+Localizacion+', Ubicacion: '+Ubicacion+', ElevacionMinima: '+ElevacionMinima+',<br> ElevacionMaxima: '+ElevacionMaxima+', Latitud: '+Latitud+', Longitud: '+Longitud+', SistemaCoordenadas: '+SistemaCoordenadas+',<br> SRSliteral: '+SRSliteral+', LatitudDecimal: '+LatitudDecimal+', LongitudDecimal: '+LongitudDecimal+',<br> DatoGeodesico: '+DatoGeodesico+', ProtocoloGeorreferencia: '+ProtocoloGeorreferencia+', Identificador: '+Identificador+',<br> FechaIdentificado: '+FechaIdentificado+', IdentificacionCalificador: '+IdentificacionCalificador+', NombreCientifico: '+NombreCientifico+',<br> Reino: '+Reino+', Filo: '+Filo+', Clase: '+Clase+', Orden: '+Orden+', Familia: '+Familia+',<br> RangoTaxon: '+RangoTaxon+', EstadoTaxonomico: '+EstadoTaxonomico+'</td></tr></table></body></html>');
      newWin.document.close();
      setTimeout(function(){newWin.close();},10);
    },

    botonVer:async function(id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion,NumeroCatalogo,Tipo,IdInstitucion,IdColeccion,IdConjuntoDatos,NombreConjuntoDatos,NumeroRegistro,Registrador,CantidadOrganismo,TipoCantidad,Sexo,EstadoExistencia,Preparativos,Disposicion,ProtocoloMuestreo,Hora,FechaEvento,Habitat,NotaEvento,Continente,Localizacion,Ubicacion,ElevacionMinima,ElevacionMaxima,Latitud,Longitud,SistemaCoordenadas,SRSliteral,LatitudDecimal,LongitudDecimal,DatoGeodesico,ProtocoloGeorreferencia,Identificador,FechaIdentificado,IdentificacionCalificador,NombreCientifico,Reino,Filo,Clase,Orden,Familia,RangoTaxon,EstadoTaxonomico){                            
      await 
            Swal.fire({
              html: '<h6>Id: '+id+'<br>Identificacion: '+Identificacion+'<br>BaseRegistro: '+BaseRegistro+'<br>CodigoInstitucion: '+CodigoInstitucion+'<br>CodigoColeccion: '+CodigoColeccion+'<br>NumeroCatalogo: '+NumeroCatalogo+'<br>Tipo: '+Tipo+'<br>IdInstitucion: '+IdInstitucion+'<br>IdColeccion: '+IdColeccion+'<br>IdConjuntoDatos: '+IdConjuntoDatos+'<br>NombreConjuntoDatos: '+NombreConjuntoDatos+'<br>NumeroRegistro: '+NumeroRegistro+'<br>Registrador: '+Registrador+'<br>CantidadOrganismo: '+CantidadOrganismo+'<br>TipoCantidad: '+TipoCantidad+'<br>Sexo: '+Sexo+'<br>EstadoExistencia: '+EstadoExistencia+'<br>Preparativos: '+Preparativos+'<br>Disposicion: '+Disposicion+'<br>ProtocoloMuestreo: '+ProtocoloMuestreo+'<br>Hora: '+Hora+'<br>FechaEvento: '+FechaEvento+'<br>Habitat: '+Habitat+'<br>NotaEvento: '+NotaEvento+'<br>Continente: '+Continente+'<br>Localizacion: '+Localizacion+'<br>Ubicacion: '+Ubicacion+'<br>ElevacionMinima: '+ElevacionMinima+'<br>ElevacionMaxima: '+ElevacionMaxima+'<br>Latitud: '+Latitud+'<br>Longitud: '+Longitud+'<br>SistemaCoordenadas: '+SistemaCoordenadas+'<br>SRSliteral: '+SRSliteral+'<br>LatitudDecimal: '+LatitudDecimal+'<br>LongitudDecimal: '+LongitudDecimal+'<br>DatoGeodesico: '+DatoGeodesico+'<br>ProtocoloGeorreferencia: '+ProtocoloGeorreferencia+'<br>Identificador: '+Identificador+'<br>FechaIdentificado: '+FechaIdentificado+'<br>IdentificacionCalificador: '+IdentificacionCalificador+'<br>NombreCientifico: '+NombreCientifico+'<br>Reino: '+Reino+'<br>Filo: '+Filo+'<br>Clase: '+Clase+'<br>Orden: '+Orden+'<br>Familia: '+Familia+'<br>RangoTaxon: '+RangoTaxon+'<br>EstadoTaxonomico: '+EstadoTaxonomico+'</h6>', 
            })
    }, 

},      
created: function(){            
   this.listarMoviles();            
},    
computed:{
    totalStock(){
        this.total = 0;
        for(movil of this.moviles){
            this.total++;
        }
        return this.total;   
    }
}    
});



//funcion para filtrar indistintamente de la cantidad de columnas y registros
//funcion para filtrar indistintamente de la cantidad de columnas y registros
//funcion para filtrar indistintamente de la cantidad de columnas y registros
//funcion para filtrar indistintamente de la cantidad de columnas y registros

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, j, visible;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("miTabla");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    visible = false;
    /* Obtenemos todas las celdas de la fila, no sólo la primera */
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        visible = true;
      }
    }
    if (visible === true) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}