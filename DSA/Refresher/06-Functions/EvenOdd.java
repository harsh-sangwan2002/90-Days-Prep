import java.util.Scanner;

public class EvenOdd {

    public static void evenOdd(int n) {

        if (n % 2 == 0)
            System.out.println("The number is even");

        else
            System.out.println("The number is odd");
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        evenOdd(n);
        scn.close();
    }
}
