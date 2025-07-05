// TC -> O(N)
// SC -> O(N)
public class RainWaterTrapped {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    private int[] findLeftMax(int[] A) {

        int n = A.length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                res[i] = A[i];

            else
                res[i] = Math.max(res[i - 1], A[i]);
        }

        return res;
    }

    private int[] findRightMax(int[] A) {

        int n = A.length;
        int[] res = new int[n];

        for (int i = n - 1; i >= 0; i--) {

            if (i == n - 1)
                res[i] = A[i];

            else
                res[i] = Math.max(res[i + 1], A[i]);
        }

        return res;
    }

    public int trap(final int[] A) {

        int[] leftMax = findLeftMax(A);
        int[] rightMax = findRightMax(A);

        int totalWater = 0, n = A.length;

        for (int i = 1; i < n - 1; i++) {

            int min = Math.min(leftMax[i - 1], rightMax[i + 1]);
            int currWater = min - A[i];

            if (currWater > 0)
                totalWater += currWater;
        }

        return totalWater;
    }
}
