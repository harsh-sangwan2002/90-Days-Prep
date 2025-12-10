public class InsertionSort {

    public static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    public static void insertionSort(int[] arr) {

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int j = i - 1;

            while (j >= 0 && arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                j--;
            }
        }
    }

    public static void main(String[] args) {

        int[] arr = { 1, 5, 4, 2, 3 };
        insertionSort(arr);

        for (int val : arr)
            System.out.print(val + " ");

        System.out.println();
    }
}
