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

        int n = A.length, j = n - 2;

        while (j >= 0 && A[j] >= A[j + 1])
            j--;

        if (j < 0) {
            reverse(A, 0, n - 1);
            return A;
        }

        int k = n - 1;
        while (k >= 0 && A[k] <= A[j])
            k--;

        swap(A, k, j);
        reverse(A, j + 1, A.length - 1);
        return A;
    }
}
