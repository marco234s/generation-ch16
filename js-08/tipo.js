/*tipo predefinido*/
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
    nombre: "Marco",
    edad: 27
}

let obj_constructor = new Object();
obj_constructor.nombre = "Dora"
obj_constructor.edad = 26
console.log(obj_literal);
console.log(obj_constructor);

obj_literal["nombr"]
let llave = "nombr";
console.log("esto es con llave" + obj_literal[llave]);


/* tipo cadena*/
let cadena = "Esto es una cadena";
let cadena_Obj = new String("Esto es otra cadena obj");
console.log(cadena);
console.log(cadena_Obj);

/*tipo numerico*/
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

/*tipo compuesto o unico*/
let lista = ["2","3","5","7"];
let lista_obj = new Array ("1","4","6","8","9");
console.log(lista);
console.log(lista_obj);