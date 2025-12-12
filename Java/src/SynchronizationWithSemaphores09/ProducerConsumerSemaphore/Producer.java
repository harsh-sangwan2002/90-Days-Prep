package SynchronizationWithSemaphores09.ProducerConsumerSemaphore;

import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Producer implements Runnable{

    private final Queue<Object> store;
    private final int maxSize;
    private final String name;
    private final Semaphore prods;
    private final Semaphore cons;

    public Producer(Queue<Object> store, int maxSize, String name, Semaphore prods, Semaphore cons){
        this.store = store;
        this.maxSize = maxSize;
        this.name = name;
        this.prods = prods;
        this.cons = cons;
    }

    @Override
    public void run() {
        try {
            prods.acquire();
        }catch (InterruptedException e){
            e.printStackTrace();
        }
        System.out.println("Producer: "+this.name+" is producing an object, store size => "+this.store.size());
        store.add(new Object());
        cons.release();
    }
}
