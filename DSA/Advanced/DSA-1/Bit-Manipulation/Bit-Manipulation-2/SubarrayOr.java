// TC -> O(N)
// SC -> O(1)
public class SubarrayOr {

    public int solve(int[] A) {

        int n = A.length;
        long sum = 0L, mod = (long) (1e9 + 7);

        for (int i = 0; i < 32; i++) {

            int idx = n;
            for (int j = n - 1; j >= 0; j--) {

                int bit = (A[j] >> i) & 1;

                if (bit == 1)
                    idx = j;

                sum = (sum + (n - idx) * 1L * (1 << i)) % mod;
            }
        }

        return (int) sum;
    }
}
