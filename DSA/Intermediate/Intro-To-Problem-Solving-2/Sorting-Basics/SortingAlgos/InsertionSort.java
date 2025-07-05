package SortingAlgos;

public class InsertionSort {

    private static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    private static void insetionSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n; i++) {

            int j = i - 1;

            while (j >= 0 && arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                j--;
            }
        }
    }

    private static void print(int[] arr) {

        for (int val : arr)
            System.out.print(val + " ");

        System.out.println();
    }

    public static void main(String[] args) {

        int[] arr = { 5, 1, 2, 4, 3 };
        insetionSort(arr);
        print(arr);
    }
}