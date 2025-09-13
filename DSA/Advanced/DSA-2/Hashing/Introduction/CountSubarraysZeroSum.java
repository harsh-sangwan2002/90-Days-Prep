import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class CountSubarraysZeroSum {

    public int solve(int[] A) {

        int n = A.length;
        HashMap<Long, Integer> map = new HashMap<>();
        long[] pre = new long[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = A[i] * 1L;

            else
                pre[i] = pre[i - 1] + A[i];
        }

        map.put(0L, 1);
        long ans = 0L, mod = (long) (1e9 + 7);

        for (long val : pre) {

            if (map.containsKey(val)) {
                ans = (ans + map.get(val)) % mod;
            }

            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        return (int) ans;
    }
}
