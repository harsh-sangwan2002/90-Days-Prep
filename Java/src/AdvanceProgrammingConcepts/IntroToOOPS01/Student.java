package AdvanceProgrammingConcepts.IntroToOOPS01;

public class Student {

    int age;

    public static void main(String[] args) {

        // This is called instantiation of class Student
        Student st = new Student();
        st.age = 22;

        Student st2 = st;
        st2.age = 23;

        System.out.println(st.age);
        System.out.println(st2.age);
    }
}
