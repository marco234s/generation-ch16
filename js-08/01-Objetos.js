let x = 10;
console.log(x.length);

let Persona = {
    nombre: "Marco",
    edad: 27,
    correo: "marcosol@gmail.com",
    /*nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }*/
    idioma: "es",
get leng(){
        return this.idioma.toUpperCase(); 
    },
    set leng (lang){
        this.idioma = lang.toLowerCase();
    }
}
console.log(Persona.leng);
personalbar.lang = "ES";
console.log(Persona.leng);

/*
Persona.tel = "5581255478";
Persona.tel = "5548758485";

console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.nombreCompleto());

//for in 

for (varPropiedad in Persona){
    console.log(Persona[varPropiedad]);
}

let personaString = JSON.stringify(Persona);
console.log(personaString);
*/






/*console.log(Persona.correo);

let Personas = new Object ();
Personas.nombre = "Fer";
Personas.edad = "21";
Personas.correo = "fer@gmail.com"

console.log(Personas);

let persona = {
    nombre:"Maria",
    apellido: "Alvarado",
    edad:"21",
    email: "flores@gmail.com",
    nombreCompleto: function(){
        return this.nombre + '' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());*/