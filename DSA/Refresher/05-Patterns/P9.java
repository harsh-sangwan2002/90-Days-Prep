import java.util.Scanner;

public class P9 {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), nsp = n - 1, nst = 1;

        for (int r = 1; r <= n; r++) {

            for (int csp = 1; csp <= nsp; csp++)
                System.out.print(" ");

            for (int cst = 1; cst <= nst; cst++)
                System.out.print("*");

            nsp--;
            nst++;
            System.out.println();
        }

        scn.close();
    }
}
