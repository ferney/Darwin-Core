
function sumar(x1,x2){ return x1+x2; }
 
function restar(x1,x2){ return x1-x2; }

function multiplicar(x1,x2){ return x1*x2 }


function dividir2(x1,x2){
  let a= "No se puede dividir por 0";
  if(x2==0)
    return x1/x2; 
    
    return a;
}



module.exports ={sumar,restar, multiplicar,dividir, dividir2}








function dividir(x1,x2){ return x1>0 && x2>0 ? x1/x2 : "No se puede dividir por 0"; }