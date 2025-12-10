// TC -> O(Math.min(N,M))
// SC -> O(1)
public class MinorDiagonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int n = A.length, m = A[0].length;
        int sum = 0, i = 0, j = m - 1;

        while (i < n && j >= 0)
            sum += A[i++][j--];

        return sum;
    }
}
