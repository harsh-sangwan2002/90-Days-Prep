import java.util.Scanner;

public class RectangleArea {

    public static void calculateArea(double l, double b) {
        System.out.println(l * b);
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        double l = scn.nextDouble(), b = scn.nextDouble();

        calculateArea(l, b);

        scn.close();
    }
}
