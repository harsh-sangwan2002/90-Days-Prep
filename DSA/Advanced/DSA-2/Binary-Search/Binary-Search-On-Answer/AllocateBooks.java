// TC -> O(N * log(sum))
// SC -> O(1)
public class AllocateBooks {

    private boolean isValid(int[] A, int mid, int B) {

        int k = 1, pages = 0;

        for (int i = 0; i < A.length; i++) {

            if (pages + A[i] <= mid)
                pages += A[i];

            else {

                k++;

                if (k > B || A[i] > mid)
                    return false;

                pages = A[i];
            }
        }

        return true;
    }

    public int books(int[] A, int B) {

        if (B > A.length)
            return -1;

        int sum = 0;

        for (int val : A)
            sum += val;

        int s = 0, e = sum, ans = -1;

        while (s <= e) {

            int mid = s + (e - s) / 2;

            if (isValid(A, mid, B)) {
                ans = mid;
                e = mid - 1;
            }

            else
                s = mid + 1;
        }

        return ans;
    }
}
