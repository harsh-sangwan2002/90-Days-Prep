import java.util.Scanner;

public class FreqArray {

    public static int findFreq(int[] arr, int k) {

        int count = 0;

        for (int val : arr) {

            if (val == k)
                count++;
        }

        return count;
    }

    public static int[] freqCount(int[] arr) {

        int n = arr.length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {
            int val = arr[i], freq = findFreq(arr, val);
            res[i] = freq;
        }

        return res;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        int[] res = freqCount(arr);

        for (int val : res)
            System.out.print(val + " ");

        System.out.println();

        scn.close();
    }
}
