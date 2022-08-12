/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/

const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

const imagenGato = document.getElementById("img-gato");
console.log(imagenGato)

const btn = document.getElementById("btn-gato")

console.log(btn);

/*Evento*/
btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Agregaer la funcionalidad
    obtenerGatoAleatorio(urlAleatorios)

})

async function obtenerGatoAleatorio(urlAleatorios) {

    const respuesta = await fetch(urlAleatorios)
    const datos = await respuesta.json()
    
    console.log(datos);
    console.log(datos[0].url); 

    imagenGato.src = datos[0].url
}

obtenerGatoAleatorio(urlAleatorios)