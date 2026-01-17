package ArrayRotation;

// TC -> O(N)
// SC -> O(1)
public class sol2 {

    private void swap(int[] A, int x, int y) {

        int temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }

    private void reverse(int[] A, int lo, int hi) {

        while (lo < hi) {
            swap(A, lo, hi);
            lo++;
            hi--;
        }
    }

    public int[] solve(int[] A, int B) {

        int n = A.length;
        B = B % n;

        reverse(A, 0, n - 1);
        reverse(A, 0, B - 1);
        reverse(A, B, n - 1);

        return A;
    }
}
