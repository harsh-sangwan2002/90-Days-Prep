import java.util.Scanner;

public class Bill {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.print("Please enter your units: ");
        int units = scn.nextInt();

        if (units >= 1 && units <= 50) {
            System.out.println(units);
        } else if (units > 51 && units < 100) {
            System.out.println(50 + (units - 50) * 2);
        } else {
            System.out.println(150 + (units - 100) * 4);
        }

        scn.close();
    }
}
