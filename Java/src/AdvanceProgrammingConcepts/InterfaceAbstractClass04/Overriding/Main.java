package AdvanceProgrammingConcepts.InterfaceAbstractClass04.Overriding;

public class Main {

    public static void main(String[] args) {

        Animal animal = new Animal();
        animal.walk();

        Dog dog = new Dog();
        dog.walk();

        animal = new Dog();
        animal.walk();
    }
}
