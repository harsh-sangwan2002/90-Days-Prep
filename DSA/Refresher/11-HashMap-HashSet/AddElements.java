import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;

public class AddElements {

    public static HashSet<Integer> createHashSet(ArrayList<Integer> list) {

        HashSet<Integer> set = new HashSet<>();

        for (Integer val : list)
            set.add(val);

        return set;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++)
            list.add(scn.nextInt());
        // list.add(null);
        // list.add(1);

        HashSet<Integer> set = createHashSet(list);
        System.out.println(set);

        scn.close();
    }
}
