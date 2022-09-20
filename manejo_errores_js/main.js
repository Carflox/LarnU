// this
/* this es una referencia que se crea cuando una función es invocada, no declarada, y el valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado call-site.

Ese lugar de llamada es la invocación en sí a la función. Es decir, el momento justo en que es llamada (no declarada, no referenciada) esa función. */

// 5. Default Binding (Invocación Directa)

/* "use strict";

x = 5;

function funcion() {
  console.log(this);
}
funcion(); // window */

// 4. Implicit Binding (invocación de Método)

/* var jhoswe = {
  nombre: "Jhoswe",
  saludar: function () {
    console.log(`hola, me llamo ${this.nombre}`);
  },

  hermano: {
    nombre: "Gerald",
    saludar: function () {
      console.log(`hola, soy el hermano, y me llamo ${this.nombre}`);
    },
  },
};

jhoswe.saludar();
jhoswe.hermano.saludar(); */

// 3. Explicit Binding (invocación Indirecta)
/* En la vinculación explícita, podemos elegir exactamente que objeto queremos que sea this, cuando se ejecuta la función. */

// call() -> Es un método que nos permite invocar una función cambiándole el contexto (valor) que va a tomar this, es decir que con este método, el contexto con el que se debe llamar a la función se pasará como parámetro call().

/* let getName = function () {
  console.log(this.nombre);
  console.log(this.apellido);
};

let usuario = {
  nombre: 'Jhoswe',
  apellido: 'Castro'
}

let usuario2 = {
  nombre: 'Saul',
  apellido: 'Perez'
}

getName.call(usuario)
getName.call(usuario2) */

//apply() -> Este otro método alternativo es exactamente lo mismo que call() pero le permite pasar los argumentos de manera más conveniente.

/* let getName = function (pasatiempo1, pasatiempo2, parametro3 = ' hablar') {
  console.log(
    "A " + this.nombre + " le gusta " + pasatiempo1 + ", " + pasatiempo2 + ' '+parametro3
  );
};

let usuario = {
  nombre: "Jhoswe",
  apellido: "Castro",
};

let usuario2 = {
  nombre: "Saul",
  apellido: "Perez",
};



let pasatiempo = ["nadar", "codear"];

getName.apply(usuario, ["nadar", "codear", 'saltar'])
getName.apply(usuario2, ["leer", "jugar", 'fumar']) */

/* 2. New Binding (Instanciar Objetos)
Cuando nosotros instanciamos un objeto con new, esta se utiliza para crear un objeto a partir de la función constructora. */

/* function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

var jhoswe = new Persona("Jhoswe", 'Castro');
var saul = new Persona("Saul", 'Perez');

console.log(jhoswe, saul); */

/* 1. Lexical Binding (Arrow Functios)
La vinculación léxica se produce cuando escribimos una función como arrow functios.

En el ejemplo que vimos en la vinculación implícita, vimos que no podíamos ejecutarla porque teníamos una función dentro de otra función y su invocación era de manera suelta. */
/* 
"use strict";

var jhoswe = {
  nombre: 'Jhoswe',
  twitter: '@jhosweg',
  saludar: function(){
    var sigTwi = () => {
      console.log('sigueme en twitter: ' + this.twitter)
    }
    console.log('hola mi nombre es ' + this.nombre)
    sigTwi()
  }
}

jhoswe.saludar() */

/* Control de Errores
Los errores en programación se refieren a situaciones que no permiten que un programa funcione normalmente. Pueden ocurrir cuando un programa no sabe cómo manejar el trabajo que tiene en cuestión, como cuando intenta abrir un archivo inexistente o llegar a un punto final de la API basada en la web mientras no hay conectividad de red. */

/* Propiedades de un Error
mensaje
nombre
pila

Tipos de Errores
- RangeError
- typeError
- Error de Sintaxis

*/

//Personalizacion de Errores
// throw -> Personalizacion del error en ruta
// try catch ->
/*  try{
codigo limpio ( sin error)
 } catch(err){
codigo sucio (codigo solucionando el error , el mensaje de error)
 } */

/* try {
  console.log("Inicio de ejecuciones del try");
  mensajeError;
  console.log("Fin de ejecucion del try");
} catch (err) {
  console.log("ocurrio un error en tu ejecucion");
} */

try {
  var valor = 'a';
  if (isNaN(valor)) {
    throw new Error("El valor no es un numero");
  }
  console.log(Math.pow(valor, 2));
} catch (error) {
  console.log("Se produjo un error " + error);
}

/* var valor = 'a';
console.log(Math.pow(valor, 2)); */