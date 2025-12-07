import java.util.Scanner;

public class Array {

    public static void main(String args[]) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        // Array declarations
        int[] arr1 = new int[n];
        // int arr2[] = new int[n];
        // int[] arr3 = { 1, 2, 3, 4, 5 };
        // int arr4[] = { 1, 2, 3, 4, 5 };

        String[] arr5 = new String[n];
        char[] arr6 = new char[n];
        double[] arr7 = new double[n];
        long[] arr8 = new long[n];

        for (int i = 0; i < n; i++)
            System.out.print(arr1[i] + " ");

        System.out.println("----------------");

        for (int i = 0; i < n; i++)
            System.out.print(arr5[i] + " ");

        System.out.println("----------------");

        for (int i = 0; i < n; i++)
            System.out.print(arr6[i] + " ");

        System.out.println("----------------");

        for (int i = 0; i < n; i++)
            System.out.print(arr7[i] + " ");

        System.out.println("----------------");

        for (int i = 0; i < n; i++)
            System.out.print(arr8[i] + " ");

        System.out.println("----------------");

        scn.close();
    }
}