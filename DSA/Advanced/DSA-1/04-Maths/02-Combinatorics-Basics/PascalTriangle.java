// TC -> O(A^2)
// SC -> O(A^2)
public class PascalTriangle {

    public int[][] solve(int A) {

        int[][] dp = new int[A][A];

        for (int i = 0; i < A; i++) {

            for (int j = 0; j <= i; j++) {

                if (i == 0 || j == 0 || i == j)
                    dp[i][j] = 1;

                else
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }

        return dp;
    }
}
