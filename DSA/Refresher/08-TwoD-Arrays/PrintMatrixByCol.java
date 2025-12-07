import java.util.Scanner;

public class PrintMatrixByCol {

    public static void printMatrixByCol(int[][] arr) {

        int n = arr.length, m = arr[0].length;

        for (int j = 0; j < m; j++) {
            for (int i = 0; i < n; i++)
                System.out.print(arr[i][j] + " ");

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

        printMatrixByCol(mat);

        scn.close();
    }
}
