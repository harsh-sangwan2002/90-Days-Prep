package SortingAlgos;

public class SelectionSort {

    private static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    private static void selectionSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            int minIdx = i;

            for (int j = i + 1; j < n; j++) {

                if (arr[j] < arr[minIdx])
                    minIdx = j;
            }

            swap(arr, minIdx, i);
        }
    }

    private static void print(int[] arr) {

        for (int val : arr)
            System.out.print(val + " ");

        System.out.println();
    }

    public static void main(String[] args) {

        int[] arr = { 5, 1, 2, 4, 3 };
        selectionSort(arr);
        print(arr);
    }
}