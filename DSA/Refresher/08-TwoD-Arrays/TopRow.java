import java.util.Scanner;

public class TopRow {

    public static void topRow(int[][] arr) {

        int m = arr[0].length;

        for (int i = 0; i < m; i++)
            System.out.print(arr[0][i] + " ");

        System.out.println();

    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), m = scn.nextInt();

        int[][] mat = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                mat[i][j] = scn.nextInt();
        }

        topRow(mat);

        scn.close();
    }
}