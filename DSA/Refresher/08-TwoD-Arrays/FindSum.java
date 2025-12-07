import java.util.Scanner;

public class FindSum {

    public static int findSum(int[][] arr) {

        int n = arr.length, m = arr[0].length;
        int sum = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                sum += arr[i][j];
        }

        return sum;
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(), m = scn.nextInt();

        int[][] mat = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                mat[i][j] = scn.nextInt();
        }

        int sum = findSum(mat);
        System.out.println(sum);

        scn.close();
    }
}
