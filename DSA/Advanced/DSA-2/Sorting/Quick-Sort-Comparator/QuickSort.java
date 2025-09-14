public class QuickSort {

    public static void printArray(int[] arr) {

        for (int val : arr)
            System.out.print(val + " ");
    }

    public static void quickSort(int[] arr, int low, int high) {

        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    public static int partition(int[] arr, int low, int high) {

        int pivot = arr[high];
        int i = low, j = low;

        while (i <= high) {

            if (arr[i] > pivot)
                i++;

            else {
                swap(arr, i, j);
                i++;
                j++;
            }
        }

        return j - 1;

    }

    public static void main(String[] args) {

        int[] arr = new int[] { 7, 9, 4, 8, 3, 6, 2, 1 };
        quickSort(arr, 0, arr.length - 1);
        printArray(arr);
    }
}
