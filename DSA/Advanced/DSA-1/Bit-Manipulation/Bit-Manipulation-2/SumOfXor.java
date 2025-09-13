// TC -> O(N)
// SC -> O(1)
public class SumOfXor {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int solve(int[] A) {

        int n = A.length;
        long ans = 0L, mod = (long) (1e9 + 7);

        for (int i = 0; i < 32; i++) {

            int zc = 0, oc = 0;
            for (int j = 0; j < n; j++) {

                if (checkBit(A[j], i))
                    oc++;

                else
                    zc++;
            }

            long contri = (zc * 1L * oc) % mod;
            ans = (ans + contri * (1 << i)) % mod;
        }

        return (int) ans;
    }
}
