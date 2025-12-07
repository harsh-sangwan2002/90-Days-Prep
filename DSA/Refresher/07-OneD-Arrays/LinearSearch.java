import java.util.Scanner;

public class LinearSearch {

    public static int linearSearch(int[] arr, int tar) {

        for (int i = 0; i < arr.length; i++) {

            if (tar == arr[i])
                return i;
        }

        return -1;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        int tar = scn.nextInt();

        int idx = linearSearch(arr, tar);
        System.out.println(idx);

        scn.close();
    }
}
