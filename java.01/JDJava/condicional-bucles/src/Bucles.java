import java.util.*; //Importar todas las clases del paquete all

public class Bucles {

    public static void main(String[] args) {

        for(int i=0; i<=10; i++){
            System.out.println(i);
        }
        //while
        //bucle no controlado
       //La condicion se debe de modificar dentro del while

        //mientras la condicion sea true
       String condicion = "";
        Scanner sc = new Scanner(System.in);

// == != estramops comparandop datos primitivos
        while(! Objects.equals(condicion, "Hola") ){

            System.out.println("Saludame");
            condicion = sc.next();
        }


        //El do while es igual al while
        //El do while ejecuta la accion aunque sea una vez

        do{
            System.out.println("Saludamex2");
            condicion = sc.next();
        }while(! Objects.equals(condicion, "Hola"));






    }
}
