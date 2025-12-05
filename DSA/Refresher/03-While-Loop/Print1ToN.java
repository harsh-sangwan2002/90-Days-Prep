import java.util.Scanner;

public class Print1ToN {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), count = 1;

        while (count <= n) {
            System.out.println(count);
            count++;
        }

        scn.close();
    }
}