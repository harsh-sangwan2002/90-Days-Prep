import java.util.Scanner;

public class StrictlyIncreasing {

    public static boolean isIncreasing(int[] arr) {

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] <= arr[i - 1])
                return false;
        }

        return true;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        boolean flag = isIncreasing(arr);
        System.out.println(flag);

        scn.close();
    }
}
