/* Ejercicio #3
Escriba bucles while para hacer lo siguiente:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
- Print all the odd numbers between 1 - 100.
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */


let xValue = 5;
console.log("XValue Decrementa en 0.5\n");
while(xValue>=0){
    console.log(xValue + "\n");
    xValue -= 0.5;
}
console.log("\n");
//_______________________________________________


console.log("Numeros Impares Entre 1 - 100\n");
let impar = 1;
while(impar<=100){
    console.log(impar + "\n");
    impar += 2;
}
console.log("\n");
//___________________________________________

console.log("Imprimir de 1 a N\n");
let n = 6;
let inic =1;
while(inic<=n){
    console.log("[" +inic +"]");
    inic ++;
}
console.log("\n");

//_________________________________________
console.log("Sumar Numeros del 1 hasta N\n");
n = 5;
inic=0;
let incremento = 1;
while(incremento<=n){
    inic = inic + incremento;
    incremento ++;
}
console.log("La Suma de 1 Hasta" + n + "es Igual a:" + inic + "\n");








let min = 1;
let max = 100;

while (min <= max) {
    if ((min %2) == 0){
        console.log(min);
    }
    min++
}

let num1 = prompt("Ingresa el numero a imprimir")
let inicio =1;
while (inicio <=num1) {
    console.log("[" +inicio +"]");
    inicio++;
}

let num2 = prompt(" Ingrese el numero para sumar");
let inicio0=1;
let resultado1=0;
for (inicio0= 1; inicio0 <= num2; inicio0++) {
    resultado1 = resultado1+inicio0;
}