import java.util.HashSet;
import java.util.Set;


public class colecciones2 {
    public static void main(String[] args) {
        //SET
        //HashSet

        //no guardan los valores en que se van agregando
        //SET no permiten elementos duplicados
        //La coleccion que funciona mas rapido

        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        miSet.remove("Felipe");


        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));






    }
}
