public class Arreglos {

    public static void main(String[] args) {

        //Arreglos
        //No se pueden mezclar tipos de datos

        int[] numeroAleatorios = {1,2,3,4,5,6,};
        String[] valores = {"Hola", "Adios", "etc"};

        //byte otrosNumeros[] = {1,2,3};

        //Los arreglos tienen un tamaño definido
        char [] caracteres = new char[4];
        caracteres[0] = 'H';
        caracteres[1] = 'O';
        caracteres[2] = 'L';
        caracteres[3] = 'A';

        valores[2] = "Valor cambiado";

        System.out.println(numeroAleatorios.length);
        System.out.println(valores[2]);
        System.out.println(caracteres);

        //for each
        for(String elemento : valores){
            System.out.println(elemento);
        }
        for(int numero : numeroAleatorios){
            System.out.println(numero);
        }
    }
}
