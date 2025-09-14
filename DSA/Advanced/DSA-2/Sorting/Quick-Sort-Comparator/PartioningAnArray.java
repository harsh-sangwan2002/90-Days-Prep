public class PartioningAnArray {

    public static void printArray(int[] arr) {

        for (int val : arr)
            System.out.print(val + " ");
    }

    public static void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    public static void partition(int[] arr, int pivot) {

        int i = 0, j = 0;

        while (i < arr.length) {

            if (arr[i] > pivot)
                i++;

            else {
                swap(arr, i, j);
                i++;
                j++;
            }
        }
    }

    public static void main(String[] args) {

        int[] arr = new int[] { 7, 9, 4, 8, 3, 6, 2, 1 };
        partition(arr, 5);
        printArray(arr);
    }
}