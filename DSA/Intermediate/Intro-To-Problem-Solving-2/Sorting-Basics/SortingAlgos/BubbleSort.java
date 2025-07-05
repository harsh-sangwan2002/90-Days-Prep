package SortingAlgos;

public class BubbleSort {

    private static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    private static void bubbleSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n - i - 1; j++) {

                if (arr[j] > arr[j + 1])
                    swap(arr, j, j + 1);
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
        bubbleSort(arr);
        print(arr);
    }
}