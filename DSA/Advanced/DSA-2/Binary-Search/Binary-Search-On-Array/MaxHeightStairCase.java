// TC -> O(log N)
// SC -> O(1)
public class MaxHeightStairCase {

    public int solve(int A) {

        if (A == 0)
            return 0;

        int ans = -1, lo = 0, hi = A;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;
            long sum = 1L * mid * (mid + 1) / 2;

            if (sum <= A) {
                ans = mid;
                lo = mid + 1;
            }

            else
                hi = mid - 1;
        }

        return ans;
    }
}
