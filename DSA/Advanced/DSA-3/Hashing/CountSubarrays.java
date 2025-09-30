import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class CountSubarrays {

    public int solve(int[] A) {

        long ans = 0, mod = (long) (1e9 + 7);
        int l = 0, r = 0, n = A.length;
        Set<Integer> set = new HashSet<>();

        while (r < n) {

            if (!set.contains(A[r])) {
                long size = (r - l + 1) % mod;
                ans = (ans + size) % mod;
                set.add(A[r]);
                r++;
            }

            else {
                set.remove(A[l]);
                l++;
            }
        }

        return (int) ans;
    }
}
