import java.util.ArrayList;
import java.util.Scanner;

public class Multiples {

    public static ArrayList<Integer> findMultiples(ArrayList<Integer> arr) {

        ArrayList<Integer> res = new ArrayList<>();

        for (int i = 0; i < arr.size(); i++) {

            if (arr.get(i) % 5 == 0 || arr.get(i) % 7 == 0)
                res.add(arr.get(i));
        }

        return res;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        ArrayList<Integer> arr = new ArrayList<>();

        for (int i = 0; i < n; i++)
            arr.add(scn.nextInt());

        ArrayList<Integer> res = findMultiples(arr);
        System.out.println(res);

        scn.close();
    }
}
