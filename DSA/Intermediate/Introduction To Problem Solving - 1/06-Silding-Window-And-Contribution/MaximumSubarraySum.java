public class MaximumSubarraySum {

    public int maxSubarray(int A, int B, int[] C) {

        int max = 0;

        for (int i = 0; i < A; i++) {
            int sum = 0;

            for (int j = i; j < A; j++) {
                sum += C[j];

                if (sum > B)
                    break;

                max = Math.max(max, sum);
            }
        }

        return max;
    }
}
