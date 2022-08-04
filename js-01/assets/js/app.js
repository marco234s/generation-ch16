"use strict";
//javascript de forma estricta
/* Tipos de datos */

/*Tipos de variables*/

let a = 20; //Local

const b = 0 // constante

var c; //global

const PI = 3.1416

/*Scope . contexto esácio en el que vive la variable*/


if(true){
    var d = 15;
}

// var d = "hola";

d = "hola";

//console.log(d)
 
/*Tipos de datos*/

//String

let cadena = "Hola mundo!";
let cadena2 = "Hola mundo!";

//Number

let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;


// undefined indefinido

let variable;
//console.log(variable);


//null

let vacio = null;
//console.log(vacio);


//NaN - Not a Number
//no es un numero
//tratar de realizar alguna operacion aritmetica con algun dato que no es un numero

/* Plantillas literales
template strings
literal strings
*/

//console.log(`Esta es una cadena ${5+4}`);
//console.log("esta es una cadena normal ${5+4}");

let nombre = "Marco";

//let presentacion = ""

//console.log("Mi nombre es " + nombre);
//console.log(`Yo me llamo ${nombre}`);

/*Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true, false] ];
//notacion de corchetes
//console.log(arr[4][0]);

//if (arr.length  >= 5){
//    console.log("tiene mas de 5 elementos");
//}

let arr2 = new Array("B", 2);
//console.log(arr2);


/*Objetos*/
//clave / valor

const persona = { nombre: "Marco", 
              edad:27, 
              hobbies: [
                "Leer",
                "Jugar",
                "Bailar"
              ],
              auto: {
                marca: "VW",
                modelo: "Vento",
                year: 2020
              },
              saludar: function (){
                console.log("Hola");
              }
};

//Notacion de punto
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobie es ${persona.hobbies[1]}`);




//Arreglo de objetos
/*[{},{},{}]*/

























