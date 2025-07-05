// TC -> O(N)
// SC -> O(1)
public class MaxRowOne {

    public int solve(int[][] A) {

        int n = A.length, r = 0, c = n - 1, ans = 0;

        while (r < n && c >= 0) {

            while (c >= 0 && A[r][c] == 1) {
                ans = r;
                c--;
            }

            r++;
        }

        return ans;
    }
}
