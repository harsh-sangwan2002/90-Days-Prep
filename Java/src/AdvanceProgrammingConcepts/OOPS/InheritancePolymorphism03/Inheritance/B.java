package AdvanceProgrammingConcepts.OOPS.InheritancePolymorphism03.Inheritance;

public class B extends A{

    int b;
//    B(){
//        System.out.println("B's constructor");
//    }

    B(int b){
        super(b);
        this.b = b;
    }
}
