package AdvanceProgrammingConcepts.StreamsLambdas10;

import java.util.Arrays;
import java.util.List;

public class Streams {

    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,3,4,5);
        List<Integer> evenNumbers = list.stream().filter(i -> i%2==0).toList();
        System.out.println(evenNumbers);
    }
}
