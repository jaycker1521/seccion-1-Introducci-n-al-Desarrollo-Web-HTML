//Esto es un comentario
var miVariable =24;
//console.log('mi edad es 24');

miVariable =12;
//console.log('mi edad ahora es 12');

const miConstante = 3;
//console.log('El valor de mi constante es'+ miConstante);

var op1 = 2;
var op2 = 3;
//var resultado = op1 + op2;
//console.log("el resultado vale: " + resultado);

//CONDICIONALES
let miNumero = 6;
let miNombre = 'david';

//let resultadoPregunta = miNumero == 7;
//console.log('resultado pregunta: ' + resultadoPregunta );

//if (miNumero >=2 || miNombre =='elian') {
 //   console.log('Si');
//} else {
  //console.log('No');
// }

let miNumero2 = 0;
if (miNumero2 >0) {
    console.log('Mi numero es positivo');
} else if (miNumero2 === 0) {
    console.log('Mi numero vale zero.');
} else {
    console.log('Mi numero es negativo');
}
 
//BUCLES

//let contador = 0;
//while (contador <= 5) {
  //console.log(contador);
  //  contador = contador + 1;
//}

//for (let i = 0; i < 100; i++) {
 //   console.log(i);
//}

//funciones

function multiplicar(num1, num2) {
   let resultado =num1 * num2;
   return resultado; 
}
let recibidor = multiplicar(8, 5);
console.log(recibidor);

//function saludar(nombre,edad) {
  //  console.log('Hola mi nombre es: '+nombre);
   // console.log('y esta es mi edad:'+ edad);    
//}

//console.log(saludar('felipe',25));

