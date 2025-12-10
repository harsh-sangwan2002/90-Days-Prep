// TC -> O(N^2)
// SC -> O(N^2)
public class AntiDiagonals {

    public int[][] diagonal(int[][] A) {

        int n = A.length, idx1 = 0;
        int[][] res = new int[2 * n - 1][];

        for (int col = 0; col < n; col++) {
            int i = 0, j = col, idx2 = 0;
            ;
            int[] temp = new int[n];

            while (i < n && j >= 0) {
                temp[idx2++] = A[i][j];
                i++;
                j--;
            }

            res[idx1++] = temp;
        }

        for (int row = 1; row < n; row++) {
            int i = row, j = n - 1, idx2 = 0;
            ;
            int[] temp = new int[n];

            while (i < n && j >= 0) {
                temp[idx2++] = A[i][j];
                i++;
                j--;
            }

            res[idx1++] = temp;
        }

        return res;
    }
}
