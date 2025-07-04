public class SumOfSubmatrices {

    public int solve(int[][] A) {

        int sum = 0, n = A.length;

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < n; j++) {

                int top_left = (i + 1) * (j + 1);
                int bottom_right = (n - i) * (n - j);
                sum += A[i][j] * top_left * bottom_right;
            }
        }

        return sum;
    }
}
