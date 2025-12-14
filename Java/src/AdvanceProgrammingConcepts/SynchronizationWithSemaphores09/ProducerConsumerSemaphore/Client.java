package AdvanceProgrammingConcepts.SynchronizationWithSemaphores09.ProducerConsumerSemaphore;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Client {

    public static void main(String[] args) {

        Queue<Object> store = new ArrayDeque<>();
        int maxSize = 6;
        Semaphore prods = new Semaphore(maxSize);
        Semaphore cons = new Semaphore(0);

        Producer p1 = new Producer(store,maxSize,"P1",prods,cons);
        Producer p2 = new Producer(store,maxSize,"P2",prods,cons);
        Producer p3 = new Producer(store,maxSize,"P3",prods,cons);
        Producer p4 = new Producer(store,maxSize,"P4",prods,cons);
        Producer p5 = new Producer(store,maxSize,"P5",prods,cons);
        Producer p6 = new Producer(store,maxSize,"P6",prods,cons);

        Consumer c1 = new Consumer(store,maxSize,"C1",prods,cons);
        Consumer c2 = new Consumer(store,maxSize,"C2",prods,cons);
        Consumer c3 = new Consumer(store,maxSize,"C3",prods,cons);
        Consumer c4 = new Consumer(store,maxSize,"C4",prods,cons);
        Consumer c5 = new Consumer(store,maxSize,"C5",prods,cons);
        Consumer c6 = new Consumer(store,maxSize,"C6",prods,cons);

        Thread t1 = new Thread(p1);
        Thread t2 = new Thread(p2);
        Thread t3 = new Thread(p3);
        Thread t4 = new Thread(p4);
        Thread t5 = new Thread(p5);
        Thread t6 = new Thread(p6);
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        t6.start();

        Thread t7 = new Thread(c1);
        Thread t8 = new Thread(c2);
        Thread t9 = new Thread(c3);
        Thread t10 = new Thread(c4);
        Thread t11 = new Thread(c5);
        Thread t12 = new Thread(c6);
        t7.start();
        t8.start();
        t9.start();
        t10.start();
        t11.start();
        t12.start();

        System.out.println("Done");
    }
}
