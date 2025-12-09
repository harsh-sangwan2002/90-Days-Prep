// TC -> O(N^2)
// SC -> O(1)
public class MaximumSubarrayEasy {

    public int maxSubarray(int A, int B, int[] C) {

        int maxSum = 0;

        for (int i = 0; i < A; i++) {
            int sum = 0;
            for (int j = i; j < A; j++) {
                sum += C[j];

                if (sum > B)
                    break;

                maxSum = Math.max(maxSum, sum);
            }
        }

        return maxSum;
    }
}
