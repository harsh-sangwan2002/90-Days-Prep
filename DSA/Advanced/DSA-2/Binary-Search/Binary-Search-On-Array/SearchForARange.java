// TC -> O(log N)
// SC -> O(1)
public class SearchForARange {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    private int leftIndex(int[] A, int B) {

        int lo = 0, hi = A.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] == B) {
                ans = mid;
                hi = mid - 1;
            }

            else if (A[mid] > B)
                hi = mid - 1;

            else
                lo = mid + 1;
        }

        return ans;
    }

    private int rightIndex(int[] A, int B) {

        int lo = 0, hi = A.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] == B) {
                ans = mid;
                lo = mid + 1;
            }

            else if (A[mid] > B)
                hi = mid - 1;

            else
                lo = mid + 1;
        }

        return ans;
    }

    public int[] searchRange(final int[] A, int B) {

        int li = leftIndex(A, B);
        int ri = rightIndex(A, B);
        return new int[] { li, ri };
    }
}
