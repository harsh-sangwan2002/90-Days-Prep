import java.util.Scanner;

public class PrintMultiples {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), multiples = 4;

        while (multiples <= n) {
            System.out.println(multiples);
            multiples += 4;
        }

        scn.close();
    }
}
