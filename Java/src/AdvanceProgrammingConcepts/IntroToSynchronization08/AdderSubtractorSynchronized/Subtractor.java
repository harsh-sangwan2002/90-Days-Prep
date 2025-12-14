package AdvanceProgrammingConcepts.IntroToSynchronization08.AdderSubtractorSynchronized;

public class Subtractor implements Runnable{

    Count count;

    Subtractor(Count count){
        this.count = count;
    }

    @Override
    public void run(){
        synchronized (count){
            for(int i=1; i<=100000; i++) {
                count.value -= i;
            }
        }
    }
}
