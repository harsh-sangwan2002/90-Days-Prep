import java.util.Scanner;

public class P10 {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), nst = 4, nsp = 0;

        for (int r = 1; r <= n; r++) {

            for (int cst = 1; cst <= nst; cst++)
                System.out.print("*");

            for (int csp = 1; csp <= nsp; csp++)
                System.out.print(" ");

            for (int cst = 1; cst <= nst; cst++)
                System.out.print("*");

            nst--;
            nsp += 2;
            System.out.println();
        }

        scn.close();
    }
}
