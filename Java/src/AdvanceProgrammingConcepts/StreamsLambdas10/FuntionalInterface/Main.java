package AdvanceProgrammingConcepts.StreamsLambdas10.FuntionalInterface;

import java.util.function.BiPredicate;
import java.util.function.BinaryOperator;

public class Main {

    public static void main(String[] args) {

//        Way-1: Create a class which implements an interface
        BiPredicate<String,Integer> biPredicate1 = new BiPredicateImpl();
        System.out.println(biPredicate1.test("Rahul",3));

//      Was-2: Anonymous Class
        BiPredicate<String,Integer> biPredicate2 = new BiPredicate<String, Integer>() {
            @Override
            public boolean test(String s, Integer val) {
                return s.length()>val;
            }
        };
        System.out.println(biPredicate2.test("Rahul",3));

//        Way-3: Lambda Expression (Java 8)
//        () -> input params
//        {} -> body
        BiPredicate<String,Integer> biPredicate3 = (s,val)->s.length()>val;
        System.out.println(biPredicate3.test("Rahul",3));

//        BinaryOperator
        BinaryOperator<String> binaryOperator = (s1,s2)->s1.concat(" "+s2);
        System.out.println(binaryOperator.apply("Rahul","Nikhil"));
    }
}
