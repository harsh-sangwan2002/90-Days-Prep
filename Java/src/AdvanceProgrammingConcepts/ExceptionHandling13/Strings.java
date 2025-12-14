package AdvanceProgrammingConcepts.ExceptionHandling13;

public class Strings {

    public static void main(String[] args) {

        String s1 = "Hello", s2 = "Hello", s3 = new String("Hello");

        System.out.println(s1==s2); // True
        System.out.println(s1==s3); // False
        System.out.println(s2==s3); // False

        System.out.println(s1.equals(s2)); // True
        System.out.println(s2.equals(s3)); // True
        System.out.println(s1.equals(s3)); // True

//        System.out.println(s1.hashCode());
//        System.out.println(s2.hashCode());
//        System.out.println(s3.hashCode());

        System.out.println(System.identityHashCode(s1));
        System.out.println(System.identityHashCode(s2));
        System.out.println(System.identityHashCode(s3));
    }
}
