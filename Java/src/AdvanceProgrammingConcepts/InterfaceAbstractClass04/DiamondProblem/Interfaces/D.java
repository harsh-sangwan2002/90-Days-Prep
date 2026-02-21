package AdvanceProgrammingConcepts.InterfaceAbstractClass04.DiamondProblem.Interfaces;

public class D implements B,C{

    public void show(){
//        B.super.show();
        C.super.show();
        System.out.println(C.b);
    }
}
