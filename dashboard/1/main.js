var url = "bd/crud.php";

var appMoviles = new Vue({    
el: "#appMoviles",   
data:{     
     moviles:[],          
     Identificacion:"", 
     Orden:"", 
     Familia:"", 
     Identificador:"", 
     Registrador:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:`
        <input id="Identificacion" type="text" placeholder="Identificacion"><br>
        <input id="Orden" type="text" placeholder="Orden"><br>
        <input id="Familia" type="text" placeholder="Familia"><br>
        <input id="Identificador" type="text" placeholder="Identificador"><br>
        <input id="Registrador" type="text" placeholder="Registrador"><br>`,              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Identificacion = document.getElementById('Identificacion').value,
              this.Orden = document.getElementById('Orden').value,
              this.Familia = document.getElementById('Familia').value, 
              this.Identificador = document.getElementById('Identificador').value,
              this.Registrador = document.getElementById('Registrador').value                    
            ]
          }
        })        
        if(this.Identificacion == "" || this.Orden == "" || this.Familia == 0 || this.Identificador == "" || this.Registrador == 0){
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
    btnEditar:async function(id, Identificacion, Orden, Familia, Identificador, Registrador){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<input id="id" type="text" value="'+id+'" disabled><br>'+
        '<input id="Identificacion" type="text" value="'+Identificacion+'"><br>'+
        '<input id="Orden" type="text" value="'+Orden+'"><br>'+
        '<input id="Familia" type="text" value="'+Familia+'"><br>'+
        '<input id="Identificador" type="text" value="'+Identificador+'"><br>'+
        '<input id="Registrador" type="text" value="'+Registrador+'">',
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {     
                                                 
            Identificacion = document.getElementById('Identificacion').value,    
            Orden = document.getElementById('Orden').value,
            Familia = document.getElementById('Familia').value, 
            Identificador = document.getElementById('Identificador').value,
            Registrador = document.getElementById('Registrador').value,                   
            
            this.editarMovil(id, Identificacion, Orden, Familia, Identificador, Registrador);
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
        axios.post(url, {opcion:1, Identificacion:this.Identificacion, Orden:this.Orden, Familia:this.Familia, Identificador:this.Identificador,Registrador:this.Registrador }).then(response =>{
            this.listarMoviles();
        });        
         this.Identificacion = "",
         this.Orden = "",
         this.Familia = "",
         this.Identificador = "",
         this.Registrador = ""
    },               
    //Procedimiento EDITAR.
    editarMovil:function(id, Identificacion, Orden, Familia, Identificador, Registrador){       
       axios.post(url, {opcion:2, id:id, Identificacion:Identificacion, Orden:Orden, Familia:Familia, Identificador:Identificador, Registrador:Registrador }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarMovil:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarMoviles();
            });
    }, 
    
    
    printDiv:async function(id, Identificacion, Orden, Familia,Registrador,Identificador){ 
      var newWin=window.open('','Print-Window');
      newWin.document.open();
      newWin.document.write('<html><body onload="window.print()" style="font-size: 4px;"><img src="img/logo.png" width="50" height="50">Id: '+id+', Identificacion: '+Identificacion+'Orden: '+ Orden+',<br> Familia: '+ Familia+', Registrador: '+Registrador+'<br>Identificador: '+Identificador+'</body></html>');
      newWin.document.close();
      setTimeout(function(){newWin.close();},10);
    },

    botonVer:async function(id, Identificacion, Orden, Familia,Registrador,Identificador){                            
      await 
            Swal.fire({
              html: '<h6>Id:'+id+'<br> Identificacion :'+Identificacion +', Orden: '+ Orden +', Familia :'+ Familia +'<br> Registrador :'+ Registrador+', Identificador:'+ Identificador+'</h6>', 
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

