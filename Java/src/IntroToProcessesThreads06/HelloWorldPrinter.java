package IntroToProcessesThreads06;

public class HelloWorldPrinter implements Runnable{

    public void run(){
        System.out.println("Hello World : Thread name = "+Thread.currentThread().getName());
    }
}
