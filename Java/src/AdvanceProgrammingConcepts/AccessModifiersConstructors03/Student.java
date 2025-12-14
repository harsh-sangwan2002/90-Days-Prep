package AdvanceProgrammingConcepts.AccessModifiersConstructors03;

public class Student {

    public String name;
    protected  int age;
    String batchName; // default
    private double psp;
    private String email;

    Student(String name){
        this.name = name;
    }

    Student(int age){
        this.age = age;
    }

    Student(String name, int age, String batchName){
        System.out.println("DEBUG");
        this.name = name;
        this.age = age;
        this.batchName = batchName;
    }

    Student(Student st){
        this.name = st.name;
        this.age = st.age;
        this.batchName = st.batchName;
        this.psp = st.psp;
        this.email = st.email;
    }

    void attendClass(){
        System.out.println("Student is attending class");
    }

    void bookMockInterview(){
        System.out.println("Student is booked for mock interview");
    }
}
