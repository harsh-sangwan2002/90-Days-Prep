package AccessModifiersConstructors;

public class Main {

    public static void main(String[] args) {

//        Custom constructor / Parameterized Constructor
        Student Nikhil = new Student("Nikhil",22,"Acad_2023");
        System.out.println(Nikhil.name);
        System.out.println(Nikhil.age);
        System.out.println(Nikhil.batchName);

        Student Aman = new Student(Nikhil);
        System.out.println(Aman.name);
    }
}
