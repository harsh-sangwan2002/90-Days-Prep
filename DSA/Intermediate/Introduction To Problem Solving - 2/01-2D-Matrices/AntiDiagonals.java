// TC -> O(N^2)
// SC -> O(N^2)
public class AntiDiagonals {

    public int[][] diagonal(int[][] A) {

        int n = A.length, size = 2 * n - 1;
        int[][] res = new int[size][];
        int idx1 = 0;

        for (int c = 0; c < n; c++) {
            int row = 0, col = c;
            int[] temp = new int[n];
            int idx2 = 0;

            while (row < n && col >= 0)
                temp[idx2++] = A[row++][col--];

            res[idx1++] = temp;
        }

        for (int r = 1; r < n; r++) {
            int row = r, col = n - 1;
            int[] temp = new int[n];
            int idx2 = 0;

            while (row < n && col >= 0)
                temp[idx2++] = A[row++][col--];

            res[idx1++] = temp;
        }

        return res;
    }
}
