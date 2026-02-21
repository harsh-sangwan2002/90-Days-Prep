package AdvanceProgrammingConcepts.OOPS;

import AdvanceProgrammingConcepts.OOPS.AccessModifiersConstructors02.Bird;

public class SpecialBird extends Bird {

    public static void main(String[] args) {

        SpecialBird bird = new SpecialBird();

        System.out.println(bird.wings);
        bird.canFly();
    }
}
