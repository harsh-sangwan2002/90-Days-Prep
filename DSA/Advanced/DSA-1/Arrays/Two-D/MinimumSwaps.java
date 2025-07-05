// TC -> O(N)
// SC -> O(1)
public class MinimumSwaps {

    public int solve(int[] A, int B) {

        int n = A.length, window = 0, bad = 0;
        for (int val : A) {

            if (val <= B)
                window++;
        }

        for (int i = 0; i < window; i++) {

            if (A[i] > B)
                bad++;
        }

        int minSwaps = bad;
        for (int i = window; i < n; i++) {

            if (A[i - window] > B)
                bad--;

            if (A[i] > B)
                bad++;

            minSwaps = Math.min(bad, minSwaps);
        }

        return minSwaps;
    }
}
