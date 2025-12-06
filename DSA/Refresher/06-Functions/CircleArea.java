import java.util.Scanner;

public class CircleArea {

    public static void calculateArea(double r) {

        System.out.println(Math.PI * r * r);
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        double r = scn.nextDouble();

        calculateArea(r);

        scn.close();
    }
}
