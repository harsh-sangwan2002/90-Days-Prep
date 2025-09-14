// TC -> O(N * log(N))
// SC -> O(1)
public class SpecialInteger {

    private boolean isValid(int[] A, int mid, int tar) {

        long sum = 0;

        for (int i = 0; i < mid; i++)
            sum += A[i];

        if (sum > tar)
            return false;

        for (int i = mid; i < A.length; i++) {

            sum -= A[i - mid];
            sum += A[i];

            if (sum > tar)
                return false;
        }

        return true;
    }

    public int solve(int[] A, int B) {

        int s = 0, e = A.length, ans = 0;

        while (s <= e) {

            int mid = s + (e - s) / 2;

            if (isValid(A, mid, B)) {
                ans = mid;
                s = mid + 1;
            }

            else
                e = mid - 1;
        }

        return ans;
    }
}
