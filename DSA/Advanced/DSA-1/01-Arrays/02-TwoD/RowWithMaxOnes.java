// TC -> O(N)
// SC -> O(1)
public class RowWithMaxOnes {

    public int solve(int[][] A) {

        int n = A.length, ans = 0, r = 0, c = n - 1;

        while (r < n && c >= 0) {

            while (c >= 0 && A[r][c] == 1) {
                c--;
                ans = r;
            }

            r++;
        }

        return ans;
    }
}
