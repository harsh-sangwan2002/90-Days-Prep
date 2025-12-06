import java.util.Scanner;

public class P8 {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), nsp = n - 1;

        for (int r = 1; r <= n; r++) {

            System.out.print("*");

            for (int csp = 1; csp <= nsp; csp++)
                System.out.print(" ");

            System.out.print("*");

            nsp--;
            System.out.println();
        }

        scn.close();
    }
}
