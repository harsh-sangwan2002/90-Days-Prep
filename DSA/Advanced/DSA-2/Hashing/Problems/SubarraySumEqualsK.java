import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class SubarraySumEqualsK {

    public int solve(int[] A, int B) {

        int n = A.length;
        long[] pre = new long[n];
        long ans = 0L, mod = (long) (1e9 + 7);

        HashMap<Long, Integer> map = new HashMap<>();
        map.put(0L, 1);

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = A[i] * 1L;

            else
                pre[i] = pre[i - 1] + A[i];
        }

        for (long val : pre) {

            long comp = val - B;

            if (map.containsKey(comp))
                ans = (ans + map.get(comp)) % mod;

            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        return (int) ans;
    }
}
