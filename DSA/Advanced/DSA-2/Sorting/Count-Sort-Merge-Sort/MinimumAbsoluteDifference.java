import java.util.Arrays;

public class MinimumAbsoluteDifference {

    public int solve(int[] A) {

        Arrays.sort(A);

        int diff = Integer.MAX_VALUE, n = A.length;

        for (int i = 1; i < n; i++) {

            int curr = A[i] - A[i - 1];
            diff = Math.min(diff, curr);
        }

        return diff;
    }
}
