// TC -> O(N)
// SC -> O(1)
public class SubarrayWithGivenLengthSum {

    public int solve(int[] A, int B, int C) {

        int sum = 0;

        for (int i = 0; i < B; i++)
            sum += A[i];

        if (sum == C)
            return 1;

        for (int i = B; i < A.length; i++) {
            sum -= A[i - B];
            sum += A[i];

            if (sum == C)
                return 1;
        }

        return 0;
    }
}
