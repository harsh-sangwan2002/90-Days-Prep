// TC -> O(N)
// SC -> O(1)
public class BuySellStock {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        if (A == null || A.length == 0)
            return 0;

        int max = 0, min = A[0];
        for (int val : A) {
            min = Math.max(min, val);
            int curr = val - min;
            max = Math.max(max, curr);
        }

        return max;
    }
}
