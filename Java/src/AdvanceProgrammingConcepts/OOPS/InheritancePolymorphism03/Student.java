package AdvanceProgrammingConcepts.OOPS.InheritancePolymorphism03;

public class Student {

    String name;
    int age;
    String batch;
    double psp;
    College college;

    Student(){

    }

    Student(String name, int age, String batch, double psp, College college){
        this.name = name;
        this.age = age;
        this.batch = batch;
        this.psp = psp;
        this.college = college;
    }

    Student(Student student){
        this.name = student.name;
        this.age = student.age;
        this.batch = student.batch;
        this.psp = student.psp;
        this.college = new College(student.college);
    }
}
