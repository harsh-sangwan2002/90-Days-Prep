// TC -> O(N^2)
// SC -> O(1)
// Stable Sorting Algo
public class InsertionSort {

    public static void swap(int[] A, int x, int y) {
        int temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }

    public static void insertionSort(int[] A) {

        int n = A.length;

        for (int i = 1; i < n; i++) {
            int j = i - 1;

            while (j >= 0 && A[j] > A[j + 1]) {
                swap(A, j, j + 1);
                j--;
            }
        }
    }

    public static void main(String[] args) {

        int[] A = { 5, 1, 2, 4, 3 };

        insertionSort(A);

        for (int val : A)
            System.out.print(val + " ");

        System.out.println();
    }
}