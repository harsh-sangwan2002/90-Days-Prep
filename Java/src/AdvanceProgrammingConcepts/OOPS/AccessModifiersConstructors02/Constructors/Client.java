package AdvanceProgrammingConcepts.OOPS.AccessModifiersConstructors02.Constructors;

public class Client {

    public static void main(String[] args) {

        Student st1 = new Student("Rohit",25,"LLD Beginner",95.0);
        Student st2 = new Student();

        // Create a student object with batch and age
        Student st3 = new Student("Rakesh",23);

        // This is not a copy
        Student st4 = st3;
        st4 = new Student(st3);

        System.out.println(st1.name);
        System.out.println(st2.name);
        System.out.println(st3.name);
        System.out.println(st4.name);
        System.out.println("DEBUG");
    }
}
