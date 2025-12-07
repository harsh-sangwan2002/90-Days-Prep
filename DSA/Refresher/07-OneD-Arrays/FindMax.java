import java.util.Scanner;

public class FindMax {

    public static int findMax(int[] arr) {

        int max = arr[0];

        for (int val : arr)
            max = Math.max(max, val);

        return max;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        int max = findMax(arr);
        System.out.println(max);

        scn.close();
    }
}
