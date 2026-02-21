package AdvanceProgrammingConcepts.Concurrency.ProcessesThreads01;

public class Main {

    public static void main(String[] args) {

        System.out.println("Hello World! printed by "+Thread.currentThread().getName());

        HelloWorldPrinter helloWorldPrinter = new HelloWorldPrinter();
        Thread t = new Thread(helloWorldPrinter);
        t.start();

        System.out.println("Bye World! printed by "+Thread.currentThread().getName());
    }
}
