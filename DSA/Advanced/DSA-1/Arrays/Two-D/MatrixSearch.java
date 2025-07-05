// TC -> O(Max(N, M))
// SC -> O(1)
public class MatrixSearch {

    public int solve(int[][] A, int B) {

        int ans = Integer.MAX_VALUE, r = 0, c = A[0].length - 1;

        while (r < A.length && c >= 0) {

            if (A[r][c] == B) {

                int curr = (r + 1) * 1009 + (c + 1);
                ans = Math.min(ans, curr);
                c--;
            }

            else if (A[r][c] > B)
                c--;

            else
                r++;
        }

        return ans == Integer.MAX_VALUE ? -1 : ans;
    }
}
