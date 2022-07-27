// funciones

/* 
function sumar (numero1,numero2) {
    console.log("voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}


sumar(4,5);
sumar(10,11);
sumar(5,2); */

/* function calculadoraSueldo (sueldoIngresado, diasTrabajados) {

    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));

}


let mes = calculadoraSueldo(100,2);



console.log(mes) */


// calculadora de porcentajes 

//0.6 = 60%
function calcularPorcentaje (numero, porcentajes) {

    let resultado = numero * porcentajes; //local
    return resultado;

}

let porcentajeResultado = calcularPorcentaje(100, 0.40);
console.log(porcentajeResultado);

let multi = 5*5
console.log(multi)
