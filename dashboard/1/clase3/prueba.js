/*const fs=require('fs');
const archivo= fs.readFileSync(__dirname + '/a.txt', 'utf-8');
console.log(archivo);*/


const wi=require('./mate');

//console.log('Hola, soy '+wi.x[0]+', disfruto del '+wi.x[1]+' y soy de '+wi.x[2]+'.');
//console.log('La resta de 4-1='+mat.restar(4,1));
//console.log(mat.nombre);

console.log("la suma es: "+wi.sumar(2,2));
console.log("la resta es: "+wi.restar(2,2));
console.log("la multi es: "+wi.multiplicar(2,2));
console.log("la divi es: "+wi.dividir(2,2));
console.log("la multi es: "+wi.multiplicar(0,2));
console.log("la divi es: "+wi.dividir(2,0));
console.log("la divi es: "+wi.dividir2(2,0));



