// TC -> O(N)
// SC -> O(1)
public class NextPermutation {

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

    public int[] nextPermutation(int[] A) {

        int n = A.length, k = n - 2;

        while (k >= 0 && A[k] >= A[k + 1])
            k--;

        if (k < 0) {
            reverse(A, 0, A.length - 1);
            return A;
        }

        int j = n - 1;
        while (j >= 0 && A[j] <= A[k])
            j--;

        swap(A, k, j);
        reverse(A, k + 1, A.length - 1);
        return A;
    }
}
