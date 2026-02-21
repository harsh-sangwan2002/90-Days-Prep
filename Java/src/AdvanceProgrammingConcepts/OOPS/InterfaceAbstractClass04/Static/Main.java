package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.Static;

public class Main {

    public static void main(String[] args) {

        Counter c1 = new Counter();
        System.out.println(Counter.count);

        Counter c2 = new Counter();
        System.out.println(c1.count);
        System.out.println(c2.count);
    }
}
