package ExecutorsCallables07.Threads;

public class NumberPrinter implements Runnable {

    int number;

    NumberPrinter(int number){
        this.number = number;
    }

    @Override
    public void run(){
        System.out.println(number+" printed by -> "+Thread.currentThread().getName());
    }
}
