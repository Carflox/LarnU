## Instrucciones

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Jhoswe";
if (true) {
  var instructor = "Jose";
}
console.log(instructor);
```

```javascript
var instructor = "Jhoswe";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Jose";
    console.log(instructor);
  }
})();
console.log(instructor);
```

```javascript
var instructor = "Jhoswe";
let pm = "Jose";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:
269px
NaN
undefined infinity
false true

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
Sucede porque, al iniciar el script manda a imprimir la variable 'a' pero esta definida por lo cual su salida es 'undefined', luego manda a imprimir la funcion 'foo' la cual no importa el orden, se de prioridad a las funciones que a las declaraciones de variables.

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
Falta la apertura de llave, y una coma, y no existe la propiedad de ejecución.

```javascript
var fullname = 'Jhoswe Castro';
var obj = {
   fullname: 'Jose Zuñiga
      fullname: 'Jorge Alonso',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
Manda a imprimir en un orden, dejando al final o una vez terminada la etapa de ejecucion empieza el conteo para las funciones.

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
```
