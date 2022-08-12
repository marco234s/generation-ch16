//Varable que simula los pedidos 
const saludo = "Hola mundo";

const datos = [
    {
        nombre: "Marco",
        apellido:"Solano"
    },
    {
        nombre: "Marco",
        apellido:"Solano"
    },
    {
        nombre: "Marco",
        apellido:"Solano"
    }
]

//Funcion para simular una peticion 
function obtenerDatos() {

    return new Promise( (resolve, reject) => {
        
    setTimeout( () => {
        if(false){
        resolve (datos)
    } else {
        reject("Nunca te quiso")
    }

}, 2000)

})

}

//Forma uno
obtenerDatos().then( (nada) =>{
    console.log(nada);
}).catch((error) => {
    console.log("Existe un error en la peticion 1");
    console.log(error);
})


//Forma dos - Funciones asincronas - await async

async function funcionAsincrona(){

    try{
        const datos = await obtenerDatos()
    console.log(datos);

    }catch(error){

        console.log(error);
    }
    
}

funcionAsincrona()