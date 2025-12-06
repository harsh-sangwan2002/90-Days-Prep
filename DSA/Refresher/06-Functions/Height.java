import java.util.Scanner;

public class Height {

    public static void checkHeight(int height) {

        if (height < 10)
            System.out.println("Small");

        else if (height >= 10 && height <= 20)
            System.out.println("Medium");

        else
            System.out.println("Large");
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int height = scn.nextInt();

        checkHeight(height);

        scn.close();
    }
}
