// Operadores

// Operadores Aritmeticos

var suma = 5 + 2;
console.log(suma);

var resta = 5 - 2;
console.log(resta);

var mult = 5 * 2;
console.log(mult);

var div = 5 / 2;
console.log(div);

var mod = 5 % 2;
console.log(mod);

var expo = 2 ** 3;
console.log(expo);

// Operadores Asignacion

var asig = 2 + 3;
console.log(asig);

asig += 5;
console.log(asig);

asig -= 5;
console.log(asig);

asig *= 15;
console.log(asig);

asig /= 15;
console.log(asig);

asig %= 15;
console.log(asig);

asig **= 5;
console.log(asig);

// Operadores Unario

var a = 5;
console.log(a);

a++;
console.log(a);
a++;
a++;
a++;
console.log(a);

a--;
a--;
a--;
a--;
console.log(a);

++a;
console.log(a);
++a;
++a;
++a;
console.log(a);

--a;
--a;
--a;
--a;
--a;
console.log(a) - a;
console.log(a);

// Operadores de comparacion

var a = 5;
var b = 7;
var c = 3;
var d = "3";

console.log(a == b);
console.log(c == d);

console.log(a != b);
console.log(c != d);

console.log(a > b);
console.log(c < d);

console.log(a >= b);
console.log(c <= d);

console.log(a === b);
console.log(c === d);

console.log(a !== b);
console.log(c !== d);

// Operadores logicos

var a = 10;
var b = 15;
var c = 20;
var d = 25;

// and
if (a > b && c > d) {
  console.log("se cumplio");
}

// or
if (a > b || c > d) {
  console.log("se cumplio");
}

//negacion
if (!(c > d)) {
  console.log("se cumplio");
}

// operador ternario
/* a ? b : c;
a -> condicion
b -> el codigo que ira en caso se cumpla la condicion
c -> el codigo en caso NO se cumpla la condicion */

var a = 20;
var b = 15;

function resp(){
  return a > b ? " a es mayor que b" : "a no es mayor que b";
}

console.log(resp())


function resp2(){
  if (a > b) {
    return(" a es mayor que b");
  } else {
    return("a no es mayor que b");
  }
}

console.log(resp2())

// Operadores de tipos
//typeof

var newFun = function(){}

console.log(typeof(newFun))