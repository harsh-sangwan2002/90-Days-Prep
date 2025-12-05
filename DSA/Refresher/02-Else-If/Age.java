import java.util.Scanner;

public class Age {
    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.print("Please enter you age: ");
        int age = scn.nextInt();

        if (age < 18) {
            System.out.println("Eligible");
        } else {
            System.out.println("Not eligible");
        }

        scn.close();
    }
}