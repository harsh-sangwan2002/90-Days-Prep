public class ArrayRotation {

    private void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    private void reverse(int[] arr, int lo, int hi) {

        while (lo < hi) {
            swap(arr, lo, hi);
            lo++;
            hi--;
        }
    }

    public int[] solve(int[] A, int B) {

        B = B % A.length;

        reverse(A, 0, A.length - 1);
        reverse(A, 0, B - 1);
        reverse(A, B, A.length - 1);

        return A;
    }
}
