// Estructuras de control
/* Las estructuras de control es aquel mecanismo que nos permite controlar el flujo de nuestra programación.

lo que vimos al momento se llama programación secuencial ya que el código va línea por línea, pero hay momentos en los cuales nosotros queremos evaluar una condición y en base a esa condición queremos que realice una acción */

// Condicionales
/* Al hacer un programa necesitaremos establecer condiciones o decisiones, donde buscamos que el navegador realice una acción A si se cumple una condición o una acción B si no se cumple. */

// if

// if else

// operadore ternario

// if multiple

// switch

/* function nota(x) {
  if (x > 10) {
    return "estas aprobado";
  } else {
    return "estas desaprobado";
  }
}

function nota2(x) {
  return x > 10 ? "estas aprobado" : "estas desaprobado";
} */
/* 
function nota(x) {
  if (x < 5) {
    return "estas desaprobado";
  } else if (x < 10) {
    return "aun tienes esperanzas de aprobar en tu susti";
  } else if (x < 15) {
    return "aprobaste";
  } else {
    return "eres una capo";
  } */
/* if (x < 5) return "estas desaprobado";
  if (x < 10) return "aun tienes esperanzas de aprobar en tu susti";
  if (x < 15) return "aprobaste";
  if (x < 20) return "eres una capo";


/* var x = 10;

switch (x) {
  case 10:
    califiacion = "eres una capo";
    break;
  case 9:
  case 8:
  case 7:
  case 6:
    califiacion = "aprobaste";
    break;
  case 5:
  case 4:
  case 3:
    califiacion = "aun tienes esperanzas de aprobar en tu susti";
    break;
  default:
    califiacion = "estas desaprobado";
    break;
} */

/* console.log(califiacion); */

/* function sumar(a, b) {
  return a + b;
  console.log("hola");
  return varsum;
}

console.log(sumar(2, 3)); */

// Ciclos (bucles)
/* Una de las principales ventajas de la programación es la posibilidad de crear bucles y repeticiones para tareas específicas, y que no tengamos que realizarlas varias veces de forma manual. */

/* Condición: Al igual que en los if, en los bucles se va a evaluar una condición para saber si se debe repetir el bucle o finalizarlo. Generalmente, si la condición es verdadera, se repite. Si es falsa, se finaliza.


- Iteración: Cada repetición de un bucle se denomina iteración. Por ejemplo, si un bucle repite una acción 10 veces, se dice que tiene 10 iteraciones.


- Contador: Muchas veces, los bucles tienen una variable que se denomina contador, porque cuenta el número de repeticiones que ha hecho, para finalizar desde que llegue a un número concreto. Dicha variable hay que inicializarla (crearla y darle un valor) antes de comenzar el bucle.


- Incremento: Cada vez que terminemos un bucle se suele realizar el incremento (o decremento) de una variable, generalmente la denominada variable contador.


- Bucle infinito: Es lo que ocurre si en un bucle se nos olvida incrementar la variable contador o escribimos una condición que nunca se puede dar. El bucle se queda eternamente repitiéndose y el programa se queda «colgado». */

// while
/* var i;
while (i <= 10) {
  console.log(i);
  i++;
} */

// DoWhile
/* var i = 20;
do {
  console.log(i);
  i++
} while (i < 10); */

//for
/* for (var i = 0; i <= 100; i++) {
  console.log(i);
} */

/* // for in
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const props in obj) {
  console.log(props + ': ' + obj[props])
} */

//

/* for (const valor of arr) {
  console.log(valor)
} */

/* for(var i =0; i <= arr.length; i++){
  console.log(arr[i])
}

var str = 'hola mundo'

for (const letr of str) {
  console.log(letr)
} */

//forEach
var arr = [11, 22, 33];

arr.forEach(function(a,i, o){
  console.log(a, i, o[0])
})
