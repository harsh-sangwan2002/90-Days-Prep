// TC -> O(N^2)
// SC -> O(1)
// Non-stable
public class SelectionSort {

    public static void swap(int[] A, int x, int y) {
        int temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }

    public static void selectionSort(int[] A) {

        int n = A.length;

        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;

            for (int j = i + 1; j < n; j++) {
                if (A[j] < A[minIdx])
                    minIdx = j;
            }

            swap(A, i, minIdx);
        }
    }

    public static void main(String[] args) {

        int[] A = { 5, 1, 2, 4, 3 };

        selectionSort(A);

        for (int val : A)
            System.out.print(val + " ");

        System.out.println();
    }
}