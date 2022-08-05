//sort()
//ordenar los elementos de un arregñlo

const arr = ["X","A","H","a","W","b"];

arr.sort();

console.log(arr);

const arr2 = ["Hola","adios","bienvenido", "Calle"];

arr2.sort();

console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80];

arr3.sort((a, b) => b - a); //ordena de mayor a menor

arr3.sort((a, b) => a -b); //ordena de menor a mayor

console.log(arr3);


//funcion declarada
//hoisting
//Un proceso de reacomodo automatico del codigo

function sumar(a,b){
    return a+b;
}
//console.log(sumar(5, 7));


let a = 2
//console.log(a);

//funcion expresada
//nop tiene hoisting

const multiplicar = function(a, b){
    return a * b;
}
//console.log(multiplicar(3, 5))


//funciones flecha
/*const dividir = (a, b) => {
    return a / b;
}*/

const dividir = (a,b) => a/b;

//console.log(dividir(10,2));


//forEach()
//un ciclo que recorre en autoimatico todo nuestro arreglo
const arrNumeros = [1,4,6,8,10,20,30];

/*for(let i=0; i< arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i]*2;

}*/
arrNumeros.forEach((elemento) => {
    console.log(elemento= elemento * 2);
})























