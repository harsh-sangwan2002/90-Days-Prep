// TC -> O(N)
// SC -> O(1)
public class BuySellStock {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        if (A == null || A.length == 0)
            return 0;

        int min = A[0], ans = 0;

        for (int val : A) {
            min = Math.min(min, val);
            int curr = val - min;
            ans = Math.max(ans, curr);
        }

        return ans;
    }
}
