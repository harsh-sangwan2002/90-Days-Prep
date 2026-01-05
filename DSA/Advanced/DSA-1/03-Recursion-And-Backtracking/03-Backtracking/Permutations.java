// TC -> O(N*N!)
// SC -> O(N*N!)
public class Permutations {

    int[][] res;
    boolean[] vis;
    int idx1;

    private int factorial(int n) {

        if (n <= 1)
            return 1;

        return n * factorial(n - 1);
    }

    private void helper(int[] arr, int[] ans, int idx2) {

        if (idx2 == arr.length) {

            int[] temp = new int[arr.length];
            int idx = 0;

            for (int val : ans)
                temp[idx++] = val;

            res[idx1++] = temp;
            return;
        }

        for (int i = 0; i < arr.length; i++) {

            if (!vis[i]) {
                ans[idx2] = arr[i];
                vis[i] = true;
                helper(arr, ans, idx2 + 1);
                vis[i] = false;
            }
        }
    }

    public int[][] permute(int[] A) {

        int n = A.length;
        res = new int[factorial(n)][n];
        vis = new boolean[n];
        idx1 = 0;

        helper(A, new int[n], 0);

        return res;
    }
}
