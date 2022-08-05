//Arreglos
//Coleccion de elementos
//Cada elemento ocupa una posicion 
//Esa posicion se conoce como indice y comienza a partir de 0

let arr =[1,2,[true],3,4];
console.log(arr);

//propiedades - describen
//metodos - acciones que puede realizar un objeto

console.log(arr[2][0]);

arr[4] = 190;
arr[4] = "Hola"
console.log(arr);


//metodfos de arreglos

const arreglo = ["adios"];

//push ()
//agrega elementos al final
arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);

console.log(arreglo);

//unshift()
//agrega elementos al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);

console.log(typeof (arreglo[4]));

//Metodos para quitar elementos
//pop()
//Quita un elemento del final del arreglo

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

//shift()
//quitar un elemento del inicio dxe la regla 

let dato2 = arreglo.shift();
console.log(dato2);

console.log(arreglo);

//splice()
//quita una parte de cualquier posicion de nuestro arreglo
//permite reemplazar un elemento
//permite insertar un elemento en una posicion en especifico

arreglo.splice(1, 1, "parangaricutirimicuaro", 52154)
//spñlice(
//   posicion de InputDeviceInfo,
//    cantidad de elementos a afectar,
//    elemento/s que queremos insertar)

console.log(arreglo);


//modifican el arreglo original

//metodos que no modifican el arreglo original
//hacen una copia, modifican esa copia

//slice()
//cortar partes de un arreglo

let dato3 = arreglo.slice(0, 2);

//slice(
    //posicion a partir de la cual va a cortar
//)

console.log(dato3);

console.log(arreglo);

// Ejerciciios
//https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops














