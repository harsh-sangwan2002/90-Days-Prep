import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class SubarrayWithZeroSum {

    public int solve(int[] A) {
        
        int n = A.length;
        long[] pre = new long[n];
        Set<Long> set = new HashSet<>();

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = A[i] * 1L;

            else
                pre[i] = pre[i - 1] + A[i];

            if (pre[i] == 0L)
                return 1;
        }

        for (long val : pre) {

            if (set.contains(val))
                return 1;

            set.add(val);
        }

        return 0;
    }
}
