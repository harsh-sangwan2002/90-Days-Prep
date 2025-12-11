package IntroToSynchronization08.AdderSubtractorSyncMethod;

public class Count {
    int value;

    public synchronized void addValue(int value){
        this.value += value;
    }

    public synchronized int getValue(){
        return value;
    }
}
