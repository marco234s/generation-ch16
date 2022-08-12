const url = "https://dog.ceo/api/breeds/image/random"

//Respuesta de la peticion
fetch(url).then((respuesta) => {
    console.log(respuesta);
})

//Obtener la informacion sde la peticion
fetch(url)
.then((resp) => resp.json())
.then((datos) =>{
    console.log(datos);
} ) 

//Forma 2
async function obtenerPerritoAleatorio() {
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
}

obtenerPerritoAleatorio()