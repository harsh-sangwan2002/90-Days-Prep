package AdvanceProgrammingConcepts.InterfaceAbstractClass04.DiamondProblem.Interfaces;

public interface B {

    int b = 10;

    default void show(){
        System.out.println("B's show");
    }
}
