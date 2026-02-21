package AdvanceProgrammingConcepts.InheritancePolymorphism03.Inheritance;

public class C extends B{

    int c;

    C(int c){
        // super must be the first line to be called
        // this() or super() only one of them can be called in a constructor/function
        super(c);
        this.c = c;
        System.out.println("C's constructor");
    }

    C(int a, int b){
        super(a);
        System.out.println("C's another constructor");
    }
}
