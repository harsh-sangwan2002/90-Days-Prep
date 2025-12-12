package SynchronizationWithSemaphores09.ProducerConsumer;

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
        while(!store.isEmpty()){
            System.out.println("Consumer: "+this.name+" is consuming an object, store size => "+this.store.size());
            store.remove();
        }
    }
}
