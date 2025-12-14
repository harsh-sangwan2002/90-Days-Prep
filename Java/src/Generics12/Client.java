package Generics12;

import java.util.HashMap;
import java.util.List;

public class Client {

    public static void main(String[] args) {

        Pair<String,Integer> p1 = new Pair();
        p1.first = "India";
        p1.second = 22;
        String country = p1.first;
        System.out.println(country);

        Pair<Double,Double> p2 = new Pair();
        p2.first = 10.5;
        p2.second = 12.5;
        double d1 = p2.first;
        System.out.println(d1);

        // Raw Types
        HashMap map = new HashMap();
        map.put("India", 22);
        map.put(10.5, 12.5);
        System.out.println(map);

        // Java 5 -> Generics were introduced
        // Java is a backward compatible language.

        List<Animal> animals = List.of(new Dog(),new Cat());
        doSomething(animals);

        List<Dog> dogs = List.of(new Dog());
        doSomething(dogs);
    }

    private static void doSomething(List<? extends Animal> animals){
        System.out.println(animals);
    }
}
