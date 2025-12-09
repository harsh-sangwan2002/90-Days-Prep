// TC -> O(N)
// SC -> O(1)
public class SumOfAllSubarrays {

    public long subarraySum(int[] A) {

        long sum = 0;
        int n = A.length;

        for (int i = 0; i < n; i++) {
            long freq = 1L * (i + 1) * (n - i);
            long contri = A[i] * 1L * freq;
            sum += contri;
        }

        return sum;
    }
}
