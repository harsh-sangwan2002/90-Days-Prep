package AdvanceProgrammingConcepts.ExecutorsCallables07.Executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Client {

    public static void main(String[] args) {

        ExecutorService executorService = Executors.newFixedThreadPool(100);
        NumberPrinter numberPrinter = null;

        for(int i=1; i<=100; i++){
            numberPrinter = new NumberPrinter(i);
            executorService.execute(numberPrinter);
        }

        executorService.shutdown();
    }
}
