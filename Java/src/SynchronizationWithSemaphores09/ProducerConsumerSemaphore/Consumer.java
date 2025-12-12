package SynchronizationWithSemaphores09.ProducerConsumerSemaphore;

import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Consumer implements Runnable{

    private final Queue<Object> store;
    private final String name;
    private final Semaphore prods;
    private final Semaphore cons;

    public Consumer(Queue<Object> store, int maxSize, String name , Semaphore prods, Semaphore cons){
        this.store = store;
        this.name = name;
        this.prods = prods;
        this.cons = cons;
    }

    @Override
    public void run() {
        try {
            cons.acquire();
        }catch (InterruptedException e){
            e.printStackTrace();
        }
        System.out.println("Consumer: "+this.name+" is consuming an object, store size => "+this.store.size());
        store.remove();
        prods.release();
    }
}
