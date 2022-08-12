class Persona{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set _nombre(nombre){
        this._nombre = nombre;
    }
}



let persona1 = new Persona("Jose", "Perez");
console.log(persona1);

persona1.nombre = "Marco Solano";
console.log(persona1.nombre);

let persona2 = new Persona("Ana", "Cruz");
console.log(persona2);