/* // varibles

var a = 5
var a = function (params) {
  console.log(params)
}

console.log(a)


// let

let b = 4
b = 10

if(true){
  let b = 6
  console.log(b)
}

console.log(b)


// const

const myBirthday = '01.03.1990'
const pi = 3.1416

// myBirthday = '02.03.1990'

console.log(Math.PI)

let str = 'hola mundo'
str='adios mundo'

const str2 = 'hola mundo2'
// str2='adios mundo2'

console.log(str)
console.log(str2)

const arr = [1,2,3,4,5]

console.log(arr)

arr.push(6)

console.log(arr)

// str2 = []

var a = 50

console.log(a) */

/* // desestructuracion
// La sintaxis de desestructuración es una funcionalidad fascinante que vino junto con ES6. Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. Es decir, podemos extraer datos de arreglos y objectos y asignarlos a variables.

// arrays
let ejemplo = ["hola", "soy", "Jhoswe"];
let saludo = ejemplo[0];
let nombre = ejemplo[2];

console.log(saludo);
console.log(nombre);

// let [saludo2, palabra, nombre1] = ejemplo;


// let [saludo2,,nombre1] = ejemplo;

let saludo2, pronombre 
[saludo2,,pronombre] = ["hola", "soy", "Jhoswe"];

console.log(saludo2);
console.log(pronombre);


// objetos
let persona = {
  sobrenombre: "Genner",
  pais2: "Peru",
  trabajo: "Desarrollador",
};
// let nombre2 = persona.sobrenombre;
// let pais = persona.pais2;

// console.log(nombre2);
// console.log(pais);

// let { sobrenombre, pais2, trabajo } = persona;

let sobrenombre, pais2, trabajo
({sobrenombre, pais2, trabajo} = persona)

console.log(sobrenombre);
console.log(pais2);
console.log(trabajo); */

/* // Objeto literal
// JavaScript soporta lo que es llamado nombres de propiedad abreviados. Esto nos permite crear un objeto usando solamente el nombre del variable. Esto nos permitirá crear una propiedad usando el mismo nombre.

const nombre = 'macbook'
const categoria = 'computador'
const precio = 1500
const producto = {
  nombre,
  categoria,
  precio
}

console.log(producto.nombre)
console.log(producto.categoria)
console.log(producto.precio)

const carritoCompras = {
  agregarProducto: function(producto){
    this.producto
  }
}

const carritoCompras2 = {
  agregarProducto(producto){
    this.producto
  }
} */

/* // parametros rest
// Los parámetros rest son una forma de utilizar parámetros virtualmente infinitos.
// En funciones el último parámetro se puede prefijar con ..., lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

function miFun(a,b, ...masParametros) {
  console.log('a',a)
  console.log('b',b)
  console.log('c', masParametros)
}

miFun('one', 'two', 'three', 'four', 'five', 'six') */

/* //Spread Operator
// El operador spread (...) le ayuda a expandir los iterables en elementos individuales.

// La sintaxis de spread funciona dentro de los literales de los arreglos, las llamadas a funciones y los objetos de propiedad inicializados para extender los valores de los objetos iterables en elementos separados. Así que, efectivamente, hace lo contrario que el operador rest.

// Nota: Un operador spread es efectivo sólo cuando se usa dentro de literales de arreglo, llamadas a funciones u objetos de propiedades inicializadas.

const arr = [1, 2, 3, 4];
function sumNum(a, b, c, d) {
  return a + b + c + d;
}

console.log(sumNum(...arr))


const nombre = ['jhoswe', 'es', 'mi']
const completado = ['dsfds', ...nombre, 'nombre']

console.log(completado) */

/* //Función Flecha
// Una expresión de función flecha es una alternativa compacta a una función Expresada tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

// con un solo parametro

// let saludo = function (nombre) {
//   return 'Hola ' + nombre
// }

// let saludo2 = nombre => 'Hola, mi nombre es ' + nombre

// con varios parametros
// let sumar = function (a, b) {
//   return a + b;
// };

// let sumar2 = (a, b) => a + b;

// sin parametro
let saludo = function () {
  return "hola mundo";
};

let saludo2 = () => "Hola Mundo desde funcion flecha";

console.log(saludo());

console.log(saludo2());

// funcion con cuerpo
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (num) {
  console.log(num);
  console.log(num * 10);
});

numeros.forEach((num) => {
  console.log(num);
  console.log(num * 10);
}); */


/* //Plantillas literales (plantillas de cadenas)
// Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.


// let saludo2 = (nombre) => "Hola Mundo desde una funcion flecha, soy " + nombre;
let saludo2 = (nombre) => `Hola Mundo desde una funcion flecha, soy ${nombre}`;

console.log(saludo2('Jhoswe')) */

//Modulos
