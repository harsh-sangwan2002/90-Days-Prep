package AdvanceProgrammingConcepts.InheritancePolymorphism03;

public class Main {

    public static void main(String[] args) {

        College college = new College("Scaler School Of Technology");
        Student student = new Student("Harsh",23,"LLD March 25",95.0,college);
        Student studentCopy = new Student(student);

        System.out.println(student);
        System.out.println(studentCopy);

        System.out.println("DEBUG");
    }
}
