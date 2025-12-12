package StreamsLambdas10.FuntionalInterface;

import java.util.function.BiPredicate;

public class BiPredicateImpl implements BiPredicate<String,Integer> {

    @Override
    public boolean test(String s, Integer val) {
        return s.length() >= val;
    }
}
