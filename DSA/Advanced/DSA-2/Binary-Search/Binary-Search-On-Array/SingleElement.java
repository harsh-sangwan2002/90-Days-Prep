// TC -> O(log N)
// SC -> O(1)
public class SingleElement {

    public int solve(int[] A) {

        int n = A.length, lo = 0, hi = n - 1;

        if (A.length == 1 || A[0] != A[1])
            return A[0];
        if (A[n - 1] != A[n - 2])
            return A[n - 1];

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] != A[mid - 1] && A[mid] != A[mid + 1])
                return A[mid];

            else if (A[mid] == A[mid - 1])
                mid = mid - 1;

            if (mid % 2 == 0)
                lo = mid + 2;

            else
                hi = mid - 1;
        }

        return -1;
    }
}
