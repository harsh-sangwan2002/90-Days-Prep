package AdvanceProgrammingConcepts.InterfaceAbstractClass04.DiamondProblem.Interfaces;

public interface C {

    int b = 20;

    default void show(){
        System.out.println("C's show");
    }
}
