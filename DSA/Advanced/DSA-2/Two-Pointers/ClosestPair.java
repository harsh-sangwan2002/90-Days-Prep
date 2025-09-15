public class ClosestPair {

    public int[] solve(int[] A, int[] B, int C) {

        int i = 0, j = B.length - 1;
        int diff = Integer.MAX_VALUE;
        int ans[] = new int[] { -1, -1 };

        while (i < A.length && j >= 0) {

            if (Math.abs(A[i] + B[j] - C) < diff) {
                diff = Math.abs(A[i] + B[j] - C);
                ans[0] = A[i];
                ans[1] = B[j];
            }

            else if (Math.abs(A[i] + B[j] - C) == diff && ans[0] == A[i])
                ans[1] = B[j];

            if (A[i] + B[j] >= C)
                j--;

            else
                i++;
        }

        return ans;
    }
}
