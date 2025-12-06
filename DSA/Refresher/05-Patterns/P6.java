import java.util.Scanner;

public class P6 {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), nst = n;

        for (int r = 1; r <= n; r++) {

            for (int cst = 1; cst <= nst; cst++) {

                if (cst == 1 || cst == n)
                    System.out.print("* ");

                else
                    System.out.print(" ");
            }

            System.out.println();
        }

        scn.close();
    }
}
