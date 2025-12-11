// TC -> O(N*M)
// SC -> O(1)
public class RowsToColumnZero {

    public int[][] solve(int[][] A) {

        boolean row = false, col = false;

        for (int i = 0; i < A.length; i++)
            if (A[i][0] == 0)
                col = true;
        for (int j = 0; j < A[0].length; j++)
            if (A[0][j] == 0)
                row = true;

        for (int i = 1; i < A.length; i++) {

            for (int j = 1; j < A[0].length; j++) {

                if (A[i][j] == 0) {
                    A[i][0] = 0;
                    A[0][j] = 0;
                }
            }
        }

        // Make rows 0:
        for (int i = 1; i < A.length; i++) {

            if (A[i][0] == 0) {
                for (int j = 1; j < A[0].length; j++)
                    A[i][j] = 0;
            }
        }

        // Make cols 0:
        for (int j = 1; j < A[0].length; j++) {

            if (A[0][j] == 0) {
                for (int i = 1; i < A.length; i++)
                    A[i][j] = 0;
            }
        }

        if (col) {
            for (int i = 0; i < A.length; i++)
                A[i][0] = 0;
        }

        if (row) {
            for (int j = 0; j < A[0].length; j++)
                A[0][j] = 0;
        }

        return A;
    }
}
