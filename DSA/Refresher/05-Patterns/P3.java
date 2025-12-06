import java.util.Scanner;

public class P3 {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), m = scn.nextInt();

        for (int r = 1; r <= n; r++) {

            for (int c = 1; c <= m; c++)
                System.out.print("* ");

            System.out.println();
        }

        scn.close();
    }
}