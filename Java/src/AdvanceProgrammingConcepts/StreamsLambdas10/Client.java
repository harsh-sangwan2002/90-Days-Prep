package AdvanceProgrammingConcepts.StreamsLambdas10;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Client {

    static class Car{
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
    }

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(6,1,2,4,5);
        Collections.sort(numbers);
//        System.out.println(numbers);

        List<Car> cars = Arrays.asList(new Car(10000,200,"BMW"),new Car(20000,150,"Audi"));
//        Comparator<Car> comparator = new Comparator<Car>() {
//            @Override
//            public int compare(Car o1, Car o2) {
//                return o1.speed-o2.speed;
//            }
//        };
        Comparator<Car> comparator = (c1,c2)->c1.speed-c2.speed;
//        Collections.sort(cars,comparator);
        Collections.sort(cars,(c1,c2)->c1.speed-c2.speed);
//        System.out.println(cars);

        List<Car> expensiveCars = cars.stream().filter(c->c.price>15000).toList();
        System.out.println(expensiveCars);

//      For every car, extract the price
        List<Integer> prices = cars.stream().map(car->car.price).toList();
        System.out.println(prices);
    }
}
