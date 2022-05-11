var url = "bd/crud.php";

var appMoviles = new Vue({    
el: "#appMoviles",   
data:{     
     moviles:[],
      CodigoColeccion:"",	
      Localizacion:"",	
      Ubicacion:"",	
      Habitat:"",	
      Latitud:"",	
      Longitud:"",	
      SRSliteral:"",	
      ElevacionMinima:"",	
      ElevacionMaxima:"",	
      FechaEvento:"",	
      Registrador:"",	
      Identificador:"",	
      Observaciones:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<input id="CodigoColeccion" type="text" placeholder="CodigoColeccion" class="form-control"><br>'+
        '<input id="Localizacion" type="text" placeholder="Localizacion" class="form-control"><br>'+
        '<input id="Ubicacion" type="text" placeholder="Ubicacion" class="form-control"><br>'+
        '<input id="Habitat" type="text" placeholder="Habitat" class="form-control"><br>'+
        '<input id="Latitud" type="number" step="any" placeholder="Latitud" class="form-control"><br>'+
        '<input id="Longitud" type="number" step="any" placeholder="Longitud" class="form-control"><br>'+
        '<input id="SRSliteral" type="text" placeholder="SRSliteral" class="form-control"><br>'+
        '<input id="ElevacionMinima" type="number" step="any" placeholder="ElevacionMinima" class="form-control"><br>'+
        '<input id="ElevacionMaxima" type="number" step="any" placeholder="ElevacionMaxima" class="form-control"><br>'+
        '<input id="FechaEvento" type="datetime-local" placeholder="FechaEvento" class="form-control"><br>'+
        '<input id="Registrador" type="text" placeholder="Registrador" class="form-control"><br>'+
        '<input id="Identificador" type="text" placeholder="Identificador" class="form-control"><br>'+
        '<input id="Observaciones" type="text" placeholder="Observaciones" class="form-control"><br>',              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.CodigoColeccion= document.getElementById('CodigoColeccion').value,	
              this.Localizacion= document.getElementById('Localizacion').value,	
              this.Ubicacion= document.getElementById('Ubicacion').value,	
              this.Habitat= document.getElementById('Habitat').value,	
              this.Latitud= document.getElementById('Latitud').value,,	
              this.Longitud= document.getElementById('Longitud').value,	
              this.SRSliteral= document.getElementById('SRSliteral').value,
              this.ElevacionMinima= document.getElementById('ElevacionMinima').value,	
              this.ElevacionMaxima= document.getElementById('ElevacionMaxima').value,	
              this.FechaEvento= document.getElementById('FechaEvento').value,	
              this.Registrador= document.getElementById('Registrador').value,	
              this.Identificador= document.getElementById('Identificador').value,	
              this.Observaciones= document.getElementById('Observaciones').value                   
            ]
          }
        })        
        if(this.CodigoColeccion=="" || this.Localizacion=="" || this.Ubicacion=="" || this.Habitat=="" || this.Latitud=="" || this.Longitud=="" || this.SRSliteral=="" || this.ElevacionMinima=="" || this.ElevacionMaxima=="" || this.FechaEvento=="" || this.Registrador=="" || this.Identificador=="" || this.Observaciones==""){
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
    btnEditar:async function(id, CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<input id="id" type="text" value="'+id+'" class="form-control" disabled><br>'+
        '<input id="CodigoColeccion" value="'+CodigoColeccion+'" type="text" class="form-control"><br>'+ 
        '<input id="Localizacion" value="'+Localizacion+'" type="text" class="form-control"><br>'+ 
        '<input id="Ubicacion" value="'+Ubicacion+'" type="text" class="form-control"><br>'+ 
        '<input id="Habitat" value="'+Habitat+'" type="text" class="form-control"><br>'+ 
        '<input id="Latitud" value="'+Latitud+'" type="text" class="form-control"><br>'+ 
        '<input id="Longitud" value="'+Longitud+'" type="text" class="form-control"><br>'+ 
        '<input id="SRSliteral" value="'+SRSliteral+'" type="text" class="form-control"><br>'+ 
        '<input id="ElevacionMinima" value="'+ElevacionMinima+'" type="text" class="form-control"><br>'+ 
        '<input id="ElevacionMaxima" value="'+ElevacionMaxima+'" type="text" class="form-control"><br>'+ 
        '<input id="FechaEvento" value="'+FechaEvento+'" type="text" class="form-control"><br>'+ 
        '<input id="Registrador" value="'+Registrador+'" type="text" class="form-control"><br>'+ 
        '<input id="Identificador" value="'+Identificador+'" type="text" class="form-control"><br>'+ 
        '<input id="Observaciones" value="'+Observaciones+'" type="text" class="form-control">', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
              CodigoColeccion= document.getElementById('CodigoColeccion').value,	
              Localizacion= document.getElementById('Localizacion').value,	
              Ubicacion= document.getElementById('Ubicacion').value,	
              Habitat= document.getElementById('Habitat').value,	
              Latitud= document.getElementById('Latitud').value,	
              Longitud= document.getElementById('Longitud').value,	
              SRSliteral= document.getElementById('SRSliteral').value,
              ElevacionMinima= document.getElementById('ElevacionMinima').value,	
              ElevacionMaxima= document.getElementById('ElevacionMaxima').value,	
              FechaEvento= document.getElementById('FechaEvento').value,	
              Registrador= document.getElementById('Registrador').value,	
              Identificador= document.getElementById('Identificador').value,	
              Observaciones= document.getElementById('Observaciones').value,                    
            
            this.editarMovil(id, CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones);
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
        axios.post(url, {opcion:1, CodigoColeccion:this.CodigoColeccion, Localizacion:this.Localizacion, Ubicacion:this.Ubicacion, Habitat:this.Habitat, Latitud:this.Latitud, Longitud:this.Longitud, SRSliteral:this.SRSliteral, ElevacionMinima:this.ElevacionMinima, ElevacionMaxima:this.ElevacionMaxima, FechaEvento:this.FechaEvento, Registrador:this.Registrador, Identificador:this.Identificador, Observaciones:this.Observaciones }).then(response =>{
            this.listarMoviles();
        });        
         this.marca = "",
         this.modelo = "",
         this.stock = 0
    },               
    //Procedimiento EDITAR.
    editarMovil:function(id,CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones){       
       axios.post(url, {opcion:2, id:id, CodigoColeccion:CodigoColeccion, Localizacion:Localizacion, Ubicacion:Ubicacion, Habitat:Habitat, Latitud:Latitud, Longitud:Longitud, SRSliteral:SRSliteral, ElevacionMinima:ElevacionMinima, ElevacionMaxima:ElevacionMaxima, FechaEvento:FechaEvento, Registrador:Registrador, Identificador:Identificador, Observaciones:Observaciones }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarMovil:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarMoviles();
            });
    }, 
    
    printDiv:async function(id, CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones){ 
      var newWin=window.open('','Print-Window');
      newWin.document.open();
      newWin.document.write('<html><body onload="window.print()" ><table><tr><td><img src="img/logo.png" width="30" height="30" ></td><td style="font-size: 4px;">Id: '+id+', CodigoColeccion: '+CodigoColeccion+', Localizacion: '+Localizacion+',<br> Ubicacion: '+Ubicacion+', Habitat: '+Habitat+', Latitud: '+Latitud+', Longitud: '+Longitud+',<br> SRSliteral: '+SRSliteral+', ElevacionMinima: '+ElevacionMinima+', ElevacionMaxima: '+ElevacionMaxima+',<br> FechaEvento: '+FechaEvento+', Registrador: '+Registrador+',<br> Identificador: '+Identificador+',<br> Observaciones: '+Observaciones+'</td></tr></table></body></html>');
      newWin.document.close();
      setTimeout(function(){newWin.close();},10);
    },

    botonVer:async function(id, CodigoColeccion, Localizacion, Ubicacion, Habitat, Latitud, Longitud, SRSliteral, ElevacionMinima, ElevacionMaxima, FechaEvento, Registrador, Identificador, Observaciones){                            
      await 
            Swal.fire({
              html: '<h6>Id: '+id+', CodigoColeccion: '+CodigoColeccion+', Localizacion: '+Localizacion+', Ubicacion: '+Ubicacion+', Habitat: '+Habitat+', Latitud: '+Latitud+', Longitud: '+Longitud+', SRSliteral: '+SRSliteral+', ElevacionMinima: '+ElevacionMinima+', ElevacionMaxima: '+ElevacionMaxima+', FechaEvento: '+FechaEvento+', Registrador: '+Registrador+', Identificador: '+Identificador+', Observaciones: '+Observaciones+'</h6>', 
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