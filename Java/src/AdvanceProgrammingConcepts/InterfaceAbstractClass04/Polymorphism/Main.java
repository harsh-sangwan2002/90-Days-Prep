package AdvanceProgrammingConcepts.InterfaceAbstractClass04.Polymorphism;

public class Main {

    public static void main(String[] args) {

        // 1.
        Animal a = new Animal();
        a.walk();
//        a.bark(); -> not possible

        // 2.
        Dog d = new Dog();
        d.walk();
        d.bark();

        // 3.
        a = new Dog();
        a.walk();
//        a.bark(); // -> objects are created at runtime

        // 4. Not possible
//        d = new Animal();
        d = (Dog) new Animal(); // Throws a run-time exception
    }
}
