// TC -> O(2^N)
// SC -> O(N)
public class TowerOfHanoi {

    private int[][] res;
    private int idx;

    private void solve(int n, int t1, int t2, int t3) {

        if (n <= 0)
            return;

        solve(n - 1, t1, t3, t2);
        res[idx++] = new int[] { n, t1, t3 };
        solve(n - 1, t2, t1, t3);
    }

    public int[][] towerOfHanoi(int A) {

        res = new int[(1 << A) - 1][3];
        idx = 0;
        solve(A, 1, 2, 3);

        return res;
    }
}
