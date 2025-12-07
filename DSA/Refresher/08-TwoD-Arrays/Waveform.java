import java.util.Scanner;

public class Waveform {

    public static void waveformPrint(int[][] arr) {

        int n = arr.length, m = arr[0].length;

        for (int i = 0; i < n; i++) {

            if (i % 2 == 0) {
                for (int j = 0; j < m; j++)
                    System.out.print(arr[i][j] + " ");
            } else {
                for (int j = m - 1; j >= 0; j--)
                    System.out.print(arr[i][j] + " ");
            }

            System.out.println();
        }
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), m = scn.nextInt();

        int[][] mat = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                mat[i][j] = scn.nextInt();
        }

        waveformPrint(mat);

        scn.close();
    }
}
