import java.util.Scanner;

public class PrimeNumbers {

    public static boolean checkPrime(int n) {

        int count = 0;

        for (int i = 1; i <= n; i++) {

            if (n % i == 0)
                count++;

            if (count > 2)
                break;
        }

        return count == 2;
    }

    public static void printPrimes(int n) {

        for (int i = 1; i <= n; i++) {
            if (checkPrime(i))
                System.out.print(i + " ");
        }
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        printPrimes(n);

        scn.close();
    }
}
