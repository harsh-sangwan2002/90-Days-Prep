// TC -> O(N)
// SC -> O(1)
public class MainDiagonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int sum = 0, i = 0;

        while (i < A.length)
            sum += A[i][i++];

        return sum;
    }
}
