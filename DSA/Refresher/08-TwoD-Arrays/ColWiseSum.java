import java.util.Scanner;

public class ColWiseSum {

    public static int[] colWiseSum(int[][] arr) {

        int n = arr.length, m = arr[0].length;
        int[] res = new int[m];

        for (int j = 0; j < m; j++) {
            int sum = 0;
            for (int i = 0; i < n; i++)
                sum += arr[i][j];

            res[j] = sum;
        }

        return res;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), m = scn.nextInt();

        int[][] mat = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                mat[i][j] = scn.nextInt();
        }

        int[] res = colWiseSum(mat);

        for (int val : res)
            System.out.print(val + " ");

        System.out.println();

        scn.close();
    }
}
