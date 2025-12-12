package SynchronizationWithSemaphores09.ProducerConsumerMutex;

import java.util.Queue;

public class Producer implements Runnable{

    private final Queue<Object> store;
    private final int maxSize;
    private final String name;

    public Producer(Queue<Object> store, int maxSize, String name){
        this.store = store;
        this.maxSize = maxSize;
        this.name = name;
    }

    @Override
    public void run() {
        synchronized (store){
            while(store.size()<maxSize){
                System.out.println("Producer: "+this.name+" is producing an object, store size => "+this.store.size());
                store.add(new Object());
            }
        }
    }
}
