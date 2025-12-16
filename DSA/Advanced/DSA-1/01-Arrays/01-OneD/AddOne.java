// TC -> O(N)
// SC -> O(1)
public class AddOne {

    public int[] plusOne(int[] A) {

        int n = A.length, zeroes = 0;

        for (int val : A) {
            if (val == 0)
                zeroes++;

            else
                break;
        }

        int[] arr = new int[n - zeroes];
        for (int i = zeroes; i < n; i++)
            arr[i - zeroes] = A[i];

        for (int i = arr.length - 1; i >= 0; i--) {

            if (arr[i] != 9) {
                arr[i]++;
                return arr;
            }

            arr[i] = 0;
        }

        arr = new int[arr.length + 1];
        arr[0] = 1;
        return arr;
    }
}
