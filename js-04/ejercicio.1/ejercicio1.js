//Parte 1 
//Hay 3 personas esperando el banco. Sus nombres en orden son Sofia, David y Juan. Crear una matriz que tenga estos tres nombbres en orden.

let arr = ["Sofia", "David", "Juan"]
console.log(arr)


//Parte 2
//Se agregan 2 personas mas al final de la Fila: Sara y Agustin. La primera persona en la fila es llamada al cajero.¿Como esta la fila?

arr.push ("Sara")
arr.push ("Agustin")
arr.shift();

console.log(arr);


//Parte 3
//Resulta que David estaba reservando un lugar para su Amiga Renata. Ella aparece y va detras de el en la fila. Aparece una persona mas (Elena) y va hasta el final de la fila. ¿Como es la cola?  ( ['David', "Renata", 'Juan','Sara', 'Agustin', "Elena"])

arr.splice(1,0,"Renata")
arr.splice(5,0,"Elena")

console.log(arr);