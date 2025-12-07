import java.util.ArrayList;
import java.util.Scanner;

public class MutliplesOfA {

    public static ArrayList<Integer> multiplesOfA(int A, int B) {

        ArrayList<Integer> res = new ArrayList<>();

        for (int i = 1; i <= B; i++) {
            res.add(A * i);
        }

        return res;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int A = scn.nextInt(), B = scn.nextInt();

        ArrayList<Integer> res = multiplesOfA(A, B);
        System.out.println(res);

        scn.close();
    }
}
