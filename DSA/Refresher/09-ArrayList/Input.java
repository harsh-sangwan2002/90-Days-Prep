import java.util.ArrayList;
import java.util.Scanner;

public class Input {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        ArrayList<Integer> arr = new ArrayList<>();

        for (int i = 0; i < n; i++)
            arr.add(scn.nextInt());

        System.out.println(arr);

        scn.close();
    }
}
