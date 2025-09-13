import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class LongestSubarrayZeroSum {

    public int solve(int[] A) {

        int n = A.length, ans = 0;
        long[] pre = new long[n];

        HashMap<Long, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = A[i] * 1L;

            else
                pre[i] = pre[i - 1] + A[i];

            if (pre[i] == 0)
                ans = i + 1;
        }

        for (int i = 0; i < n; i++) {

            long val = pre[i];

            if (map.containsKey(val))
                ans = Math.max(ans, i - map.get(val));

            else
                map.put(val, i);
        }

        return ans;
    }
}
