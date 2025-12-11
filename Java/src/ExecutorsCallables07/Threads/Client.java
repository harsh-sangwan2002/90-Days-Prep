package ExecutorsCallables07.Threads;

public class Client {

    public static void main(String[] args) {

        Thread t = null;
        NumberPrinter numberPrinter = null;

        for(int i=1; i<=100; i++){
            numberPrinter = new NumberPrinter(i);
            t = new Thread(numberPrinter);
            t.start();
        }
    }
}
