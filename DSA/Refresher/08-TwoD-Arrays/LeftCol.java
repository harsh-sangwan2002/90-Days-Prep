import java.util.Scanner;

public class LeftCol {

    public static void leftCol(int[][] arr) {

        int n = arr.length;

        for (int i = 0; i < n; i++)
            System.out.print(arr[i][0] + " ");

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

        leftCol(mat);

        scn.close();
    }
}
