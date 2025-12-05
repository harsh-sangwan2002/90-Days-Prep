public class Operators {

    public static void main(String[] args) {

        // If two data types are present compiler will always give answer in the larger
        // data-type

        // 1. Division
        // int/int -> int
        // float/int -> float
        // int/float -> float
        // long/int -> long
        // int/long -> long
        // float/float -> float
        // double/float -> double
        // float/double -> double

        System.out.println(3 / 2.0);

        // 2. Multiplication
        // int*int -> int
        // int*long -> long
        // long*long -> long
        // float*int -> float
        // float*float -> float
        // double*float -> double
        // double*long -> double

        System.out.println(3L * 0.2F);

        int x = 1000000, y = 1000000;
        long ans = (long) x * y;
        System.out.println(ans);

        // 3. Modulo
        // 8%3 -> 2
        // 10%2 -> 0
        // 2%10 -> 2

        // 4. Relational Operator -> The ans of this is always true or false
        // a>b
        // a<b
        // a>=b
        // a<=b
        // a==b
        // a!=b

        System.out.println(5 > 8);
        System.out.println(5 != 8);

        // 5. Logical Operators
        // And - &&
        // OR - ||
        // Not - !
    }
}
