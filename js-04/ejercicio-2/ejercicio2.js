//Ejercicio 2
//Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.
//*  
//* *  
//* * *  
//* * * *  
//* * * * *


let ast ="";
for (let x = 0; x < 5; x++) {
    ast += "*";
    console.log(ast);
    
}

for(let i = 1; i < 6; i++){
    let ast= "";

    for(let j = 0; j < i; j++){
        ast = ast + "*";
    }
    console.log(ast);
}