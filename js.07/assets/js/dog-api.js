
/*URLs para consumir*/

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

/*Elementos del DOM*/
const imagenPerrito = document.getElementById("img-perrito");

const btn = document.getElementById("btn-perrito")

console.log(btn);

/*Evento*/
btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Agregaer la funcionalidad
    obtenerPerritoAleatorio(urlAleatorios)

})

async function obtenerPerritoAleatorio(url) {

    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    
    console.log(datos);
    console.log(datos.message); 

    imagenPerrito.src = datos.message
}

//obtenerPerritoAleatorio(urlAleatorios)