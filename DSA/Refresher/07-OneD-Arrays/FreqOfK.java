import java.util.Scanner;

public class FreqOfK {

    public static int findFreq(int[] arr, int k) {

        int count = 0;

        for (int val : arr) {

            if (val == k)
                count++;
        }

        return count;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = scn.nextInt();

        int k = scn.nextInt();

        int freq = findFreq(arr, k);
        System.out.println(freq);

        scn.close();
    }
}
