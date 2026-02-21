package AdvanceProgrammingConcepts.InterfaceAbstractClass04.Static;

public class Counter {

    static int count;
    int x = 20;

    Counter(){
        count++;
    }

    static void staticMethod(){
//        System.out.println(x);
        System.out.println(count);
    }

    void nonStaticMethod(){
        System.out.println(x);
        System.out.println(count);
    }
}
