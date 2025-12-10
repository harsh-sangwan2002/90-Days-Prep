package IntroToProcessesThreads06;

public class Client {

    public static void main(String[] args) {

        System.out.println("Hello World : Thread name = "+Thread.currentThread().getName());

        HelloWorldPrinter hp1 = new HelloWorldPrinter();
        Thread thread = new Thread(hp1);
        thread.start();

        HelloWorldPrinter hp2 = new HelloWorldPrinter();
        thread = new Thread(hp2);
        thread.start();

        System.out.println("Hello World : Thread name = "+Thread.currentThread().getName());
    }
}
