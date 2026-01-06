import java.util.HashMap;
import java.util.Map;

// TC -> O(N+M)
// SC -> O(M)
public class PairSumModM {

    public int solve(int[] A, int B) {

        int n = A.length;
        long ans = 0L, mod = (long) (1e9 + 7);
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            A[i] %= B;
            map.put(A[i], map.getOrDefault(A[i], 0) + 1);
        }

        long count = map.getOrDefault(0, 0) * 1L;
        ans = (ans + count * (count - 1) / 2) % mod;

        if (B % 2 == 0) {
            count = map.getOrDefault(B / 2, 0) * 1L;
            ans = (ans + count * (count - 1) / 2) % mod;
        }

        for (int i = 1; i < (B + 1) / 2; i++) {
            int a = map.getOrDefault(i, 0);
            int b = map.getOrDefault(B - i, 0);
            ans = (ans + a * 1L * b) % mod;
        }

        return (int) ans;
    }
}
