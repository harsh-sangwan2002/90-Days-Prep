import java.util.Scanner;

public class FindMin {

    public static int findMin(int[] arr) {

        int min = arr[0];

        for (int val : arr)
            min = Math.min(min, val);

        return min;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        int min = findMin(arr);
        System.out.println(min);

        scn.close();
    }
}
