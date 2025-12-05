import java.util.Scanner;

public class Input {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int i = scn.nextInt();
        long l = scn.nextLong();
        double d = scn.nextDouble();
        float f = scn.nextFloat(); // upto 7 decimal points only

        scn.nextLine(); // consume leftover newline
        String s = scn.nextLine(); // now it works

        System.out.println(i);
        System.out.println(l);
        System.out.println(d);
        System.out.println(f);
        System.out.println(s);

        scn.close();
    }
}
