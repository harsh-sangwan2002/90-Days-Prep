// TC -> O(N * log(sum))
// SC -> O(1)
public class PainterPartition {

    private long mod = (long) (1e7 + 3);

    private boolean isValid(int[] A, long mid, int n) {

        int painters = 1, board = 0;

        for (int i = 0; i < A.length; i++) {

            if (board + A[i] <= mid)
                board += A[i];

            else {

                painters++;

                if (painters > n || A[i] > mid)
                    return false;

                board = A[i];
            }
        }

        return true;
    }

    public int paint(int A, int B, int[] C) {

        long s = 0, e = (long) (1e9 + 7), ans = -1;

        while (s <= e) {

            long mid = (s + (e - s) / 2) % mod;

            if (isValid(C, mid, A)) {
                ans = mid % mod;
                e = mid - 1;
            }

            else
                s = mid + 1;
        }

        return (int) ((ans * B) % mod);
    }
}
