// TC -> O(N)
// SC -> O(1)
public class SumOfAllSubarrays {

    public long subarraySum(int[] A) {

        long sum = 0L, n = A.length;

        for (int i = 0; i < n; i++) {
            long freq = (i + 1) * 1L * (n - i);
            long contri = freq * A[i];
            sum += contri;
        }

        return sum;
    }
}
