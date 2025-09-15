// TC -> O(N)
// SC -> O(1)
public class PairsWithGivenSum {

    public int solve(int[] A, int B) {

        long mod = (long) (1e9 + 7), ans = 0L;
        int i = 0, j = A.length - 1;

        while (i < j) {

            long sum = A[i] + A[j];

            if (sum == B) {

                if (A[i] == A[j]) {

                    int len = j - i + 1;
                    long count = 1L * (len) * (len - 1) / 2;
                    ans = (ans + count) % mod;
                    return (int) ans;
                }

                int i2 = i, a = 0;

                while (A[i2] == A[i]) {
                    i2++;
                    a++;
                }

                int j2 = j, b = 0;

                while (A[j2] == A[j]) {
                    j2--;
                    b++;
                }

                i = i2;
                j = j2;

                ans = (ans + 1L * a * b) % mod;
            }

            else if (sum < B)
                i++;

            else
                j--;
        }

        return (int) ans;
    }
}
