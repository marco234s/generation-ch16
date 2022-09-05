package EjemplosResumen;

public class Animal {

    private String raza;
    private String nombre;
    private int edad;


public Animal (String raza, String nombre, int edad) {
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
        }

        public String getRaza() {
    return raza;
        }
    public void setRaza(String raza) {
        this.raza = raza;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getEdad() {
return edad;
}
    public void setEdad(String Edad) {
        this.edad = edad;
        }
        public String toString() {
    return "Animal{"+"raza=" + raza + ", nombre=" + nombre + ", edad= " + edad + '}';
        }
}





