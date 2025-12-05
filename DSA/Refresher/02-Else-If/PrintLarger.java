import java.util.Scanner;

public class PrintLarger {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);

        System.out.print("Please enter the 1st number: ");
        int x = scn.nextInt();

        System.out.print("Please enter the 2nd number: ");
        int y = scn.nextInt();

        if (x > y) {
            System.out.println(x + " is greater than " + y);
        } else if (x < y) {
            System.out.println(y + " is greater than " + x);
        } else {
            System.out.println("Both numbers are equal.");
        }

        scn.close();
    }
}
