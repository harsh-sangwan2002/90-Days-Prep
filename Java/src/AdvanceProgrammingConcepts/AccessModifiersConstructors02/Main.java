package AdvanceProgrammingConcepts.AccessModifiersConstructors02;

public class Main {

    public static void main(String[] args) {

        Bird bird = new Bird();

        bird.name = "XYZ";
        bird.age = 25;
        bird.wings = 2;

        System.out.println(bird.name);
        System.out.println(bird.age);
        System.out.println(bird.wings);

        bird.canFly();
    }
}
