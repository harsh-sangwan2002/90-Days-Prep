import java.util.Scanner;

public class SumOfDigits {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), sum = 0;

        while (n != 0) {
            int last_digit = n % 10;
            sum += last_digit;
            n /= 10;
        }

        System.out.println(sum);

        scn.close();
    }
}
