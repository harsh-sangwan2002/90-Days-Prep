// TC -> O(N^2)
// SC -> O(1)
// Stable sorting algo
public class BubbleSort {

    public static void swap(int[] A, int x, int y) {
        int temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }

    public static void bubbleSort(int[] A) {

        int n = A.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = i; j < n - i - 1; j++) {

                if (A[j] > A[j + 1])
                    swap(A, j, j + 1);
            }
        }
    }

    public static void main(String[] args) {

        int[] A = { 5, 1, 2, 4, 3 };

        bubbleSort(A);

        for (int val : A)
            System.out.print(val + " ");

        System.out.println();
    }
}