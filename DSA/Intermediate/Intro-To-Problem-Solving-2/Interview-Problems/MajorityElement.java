// TC -> O(N)
// SC -> O(1)
public class MajorityElement {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int majorityElement(final int[] A) {

        int ans = 0, count = 0;

        for (int val : A) {

            if (count == 0) {
                ans = val;
                count++;
            }

            else {

                if (val == ans)
                    count++;

                else
                    count--;
            }
        }

        return ans;
    }
}
