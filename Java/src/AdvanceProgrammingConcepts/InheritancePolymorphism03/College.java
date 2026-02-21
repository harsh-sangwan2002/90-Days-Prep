package AdvanceProgrammingConcepts.InheritancePolymorphism03;

public class College {

    String collegeName;
    Address address;

    College(String collegeName) {
        this.collegeName = collegeName;
    }

    College(College college){
        this.collegeName = college.collegeName;
        this.address = college.address; // Shallow copy
        this.address = new Address(college.address); // Deep copy
    }
}
