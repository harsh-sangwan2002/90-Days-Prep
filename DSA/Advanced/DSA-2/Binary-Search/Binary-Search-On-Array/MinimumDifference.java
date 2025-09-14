// TC -> O(N * M * log N)
// SC -> O(1)

import java.util.Arrays;

public class MinimumDifference {

    private int findLower(int[] A, int tar) {

        int lo = 0, hi = A.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] == tar)
                return A[mid];

            else if (A[mid] > tar)
                hi = mid - 1;

            else {
                ans = A[mid];
                lo = mid + 1;
            }
        }

        return ans;
    }

    private int findUpper(int[] A, int tar) {

        int lo = 0, hi = A.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] == tar)
                return A[mid];

            else if (A[mid] > tar) {
                ans = A[mid];
                hi = mid - 1;
            }

            else
                lo = mid + 1;
        }

        return ans;
    }

    public int solve(int A, int B, int[][] C) {

        for (int i = 0; i < A; i++)
            Arrays.sort(C[i]);

        int ans = Integer.MAX_VALUE;

        for (int i = 0; i < A - 1; i++) {

            for (int j = 0; j < B; j++) {

                int tar = C[i][j];

                ans = Math.min(ans, Math.abs(tar - findLower(C[i + 1], tar)));
                ans = Math.min(ans, Math.abs(tar - findUpper(C[i + 1], tar)));
            }
        }

        return ans;
    }
}
