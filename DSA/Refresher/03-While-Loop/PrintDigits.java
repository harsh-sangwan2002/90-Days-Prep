import java.util.Scanner;

public class PrintDigits {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        while (n != 0) {
            int last_digit = n % 10;
            System.out.println(last_digit);
            n /= 10;
        }

        scn.close();
    }
}
