package Collections11;

import java.util.*;

public class Client {

    static class Car implements Comparable<Car>{
        int price;
        int speed;
        String name;

        public Car(int price, int speed, String name){
            this.price = price;
            this.speed = speed;
            this.name = name;
        }

        @Override
        public String toString(){
            return "Car{" + "price=" + price + ", speed=" + speed + ", name='" + name + '\'' + '}';
        }

        @Override
        public int compareTo(Car o) {
            return this.speed - o.speed;
        }
    }

    public static void main(String[] args) {

//        List Interface
        List<Integer> al = new ArrayList<>();
        List<Integer> ll = new LinkedList<>();
        List<Integer> v = new Vector<>();
        List<Integer> st = new Stack<>();

//        Set Interface
        Set<String> hs = new HashSet<>();
        Set<String> lhs = new LinkedHashSet<>();
        Set<String> ts = new TreeSet<>();

        hs.add("India"); hs.add("USA"); hs.add("Australia"); hs.add("New Zealand");
        System.out.println(hs);

//        It maintains the order of insertion
        lhs.add("India"); lhs.add("USA"); lhs.add("Australia"); lhs.add("New Zealand");
        System.out.println(lhs);

//
        ts.add("India"); ts.add("USA"); ts.add("Australia"); ts.add("New Zealand");
        System.out.println(ts);

        Car car1 = new Car(10000,200,"Audi");
        Car car2 = new Car(20000,150,"BMW");
        Car car3 = new Car(30000,100,"Mercedes");
        Car car4 = new Car(40000,120,"Volvo");

        Set<Car> cars = new TreeSet<>();
        cars.add(car1); cars.add(car2); cars.add(car3); cars.add(car4);
        System.out.println(cars);
    }
}
