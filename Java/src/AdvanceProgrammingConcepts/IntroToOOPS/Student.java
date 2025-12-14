package AdvanceProgrammingConcepts.IntroToOOPS;

public class Student {

    public String name;
    protected  int age;
    String batchName; // default
    private double psp;
    private String email;

    void attendClass(){
        System.out.println("Student is attending class");
    }

    void bookMockInterview(){
        System.out.println("Student is booked for mock interview");
    }
}
