package AdvanceProgrammingConcepts.IntroToOOPS2;

import AdvanceProgrammingConcepts.IntroToOOPS.Student;

public class Main extends Student {

    public static void main(String[] args) {

        Student st1 = new Student();
        System.out.println(st1.name);
        Main m = new Main();
        System.out.println(m.age);
    }
}
