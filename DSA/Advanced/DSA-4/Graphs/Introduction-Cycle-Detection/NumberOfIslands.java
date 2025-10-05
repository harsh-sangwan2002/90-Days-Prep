// TC -> O(N * M)
// SC -> O(N * M)
public class NumberOfIslands {

    private static int[] rows = { -1, 0, 1, 0, -1, 1, -1, 1 };
    private static int[] cols = { 0, -1, 0, 1, -1, 1, 1, -1 };

    private void dfs(int[][] A, int r, int c) {

        if (r < 0 || c < 0 || r >= A.length || c >= A[0].length || A[r][c] == 0 || A[r][c] == 2)
            return;

        A[r][c] = 2;

        for (int i = 0; i < rows.length; i++) {
            int x = r + rows[i], y = c + cols[i];
            dfs(A, x, y);
        }
    }

    public int solve(int[][] A) {

        int islands = 0;

        for (int i = 0; i < A.length; i++) {

            for (int j = 0; j < A[i].length; j++) {

                if (A[i][j] == 1) {
                    islands++;
                    dfs(A, i, j);
                }
            }
        }

        return islands;
    }
}
