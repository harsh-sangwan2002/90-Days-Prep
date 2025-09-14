public class QuickSelect {

    public static int quickSelect(int[] arr, int low, int high, int k) {

        int pi = partition(arr, low, high);
        if (pi == k)
            return arr[pi];

        else if (pi > k)
            return quickSelect(arr, low, pi - 1, k);

        else
            return quickSelect(arr, pi + 1, high, k);

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
        int k = 3;
        System.out.println(quickSelect(arr, 0, arr.length - 1, k));
    }
}
