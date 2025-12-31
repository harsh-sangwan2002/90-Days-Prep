// TC -> O(N)
// SC -> O(1)
public class MinorDiagonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int r = 0, c = A[0].length - 1, sum = 0;

        while (c >= 0)
            sum += A[r++][c--];

        return sum;
    }
}
