import java.util.Scanner;

public class Temperature {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.print("Please enter the temperature: ");
        float temp = scn.nextFloat();

        if (temp >= 98.2 && temp <= 98.8) {
            System.out.println("Normal");
        } else if (temp < 98.2) {
            System.out.println("Low");
        } else {
            System.out.println("High");
        }

        scn.close();
    }
}
