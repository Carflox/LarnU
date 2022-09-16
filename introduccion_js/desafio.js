/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

var nombre = Esteban;
var apellido = Peña;
var edad = 23;
var eresDesarrollador = true;
var fecha = new Date(1998, 12, 01);

let myFavoriteBook = new Object();
myFavoriteBook.tittle =
  "Wie wirklich istdie Wirklichkeit? / Es real la realidad?";
myFavoriteBook.author = "Paul Watzlawick";
myFavoriteBook.date = 1979;
myFavoriteBook.url =
  "https://centredocumentacioap.diba.cat/cgi-bin/koha/tracklinks.pl?uri=http%3A%2F%2Fcentredocumentacioap.diba.cat%2Fcgi-bin%2Fkoha%2Fopac-retrieve-file.pl%3Fid%3Da55910fec949bcc346b28672a6b41429&biblionumber=36391";

var pasatiempos = [
  "Escuchar Música",
  "Aprender los lenguajes de programación",
  "Ver peliculas",
  "Dormir",
];

function miActividadFavorita() {
  var actividadFavorita = "Dormir";
  return actividadFavorita;
}
