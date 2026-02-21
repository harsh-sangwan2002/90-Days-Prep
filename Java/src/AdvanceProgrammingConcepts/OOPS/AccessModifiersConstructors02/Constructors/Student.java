package AdvanceProgrammingConcepts.OOPS.AccessModifiersConstructors02.Constructors;

public class Student {

    String name;
    int age;
    String batch;
    double psp;

    Student(){

    }

    // Student(String, int)
    Student(String name, int age){
        this.name = name;
        this.age = age;
    }

    // Student(int, String)
    Student(int age, String name){
        this.name = name;
        this.age = age;
    }

    // Constructor overloading
    Student(String name, int age, String batch, double psp) {
        this.name = name;
        this.age = age;
        this.batch = batch;
        this.psp = psp;
    }

    Student(Student student){
        this.name = student.name;
        this.age = student.age;
        this.batch = student.batch;
        this.psp = student.psp;
    }
}
