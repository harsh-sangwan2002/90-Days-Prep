package AdvanceProgrammingConcepts.SynchronizationWithSemaphores09.ProducerConsumerMutex;

import java.util.Queue;

public class Consumer implements Runnable{

    private final Queue<Object> store;
    private final String name;

    public Consumer(Queue<Object> store, int maxSize, String name){
        this.store = store;
        this.name = name;
    }

    @Override
    public void run() {
        synchronized (store){
            while(!store.isEmpty()){
                System.out.println("Consumer: "+this.name+" is consuming an object, store size => "+this.store.size());
                store.remove();
            }
        }
    }
}
