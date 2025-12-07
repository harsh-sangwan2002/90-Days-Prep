import java.util.ArrayList;
import java.util.Scanner;

public class Staircase {

    public static ArrayList<ArrayList<Integer>> staircase(int n) {

        ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        ArrayList<Integer> prev = new ArrayList<>();
        prev.add(1);
        res.add(prev);

        for (int i = 2; i <= n; i++) {
            ArrayList<Integer> temp = new ArrayList<>(prev);
            temp.add(i);
            res.add(temp);
            prev = temp;
        }

        return res;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        ArrayList<ArrayList<Integer>> res = staircase(n);
        System.out.println(res);

        scn.close();
    }
}
