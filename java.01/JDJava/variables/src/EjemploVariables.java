import javax.management.PersistentMBean;

public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Marco";
        String saludo = "Hola esto es ejemplo de variables";

        System.out.println(saludo + "" + nombre);
        char espacio = '\u0040';
        char caracter = '7';
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo: " + Character.MAX_VALUE);
        System.out.println("char valor minimo: " + Character.MIN_VALUE);
        
        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        float numeroFloat = 1.5e-10f;
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);


        var miVar = 2;
        System.out.println("miVar = " + miVar);




        
        
        
        
    }
}
