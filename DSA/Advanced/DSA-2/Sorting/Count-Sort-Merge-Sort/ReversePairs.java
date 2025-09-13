// TC -> O(N*log N)
// SC -> O(N)
public class ReversePairs {

    private int merge(int[] A, int s, int mid, int e) {

        int n1 = mid - s + 1, n2 = e - mid;

        int[] left = new int[n1], right = new int[n2];

        for (int i = 0; i < n1; i++)
            left[i] = A[s + i];

        for (int j = 0; j < n2; j++)
            right[j] = A[mid + j + 1];

        int i = 0, j = 0, k = s, count = 0;

        while (i < n1 && j < n2) {

            if (1L * left[i] > 2L * right[j]) {
                count += n1 - i;
                j++;
            }

            else
                i++;
        }

        i = 0;
        j = 0;

        while (i < n1 && j < n2) {

            if (left[i] < right[j])
                A[k++] = left[i++];

            else
                A[k++] = right[j++];
        }

        while (i < n1)
            A[k++] = left[i++];

        while (j < n2)
            A[k++] = right[j++];

        return count;
    }

    private int reversePairs(int[] A, int s, int e) {

        if (s >= e)
            return 0;

        int mid = s + (e - s) / 2, count = 0;
        count += reversePairs(A, s, mid);
        count += reversePairs(A, mid + 1, e);
        count += merge(A, s, mid, e);

        return count;
    }

    public int solve(int[] A) {

        return reversePairs(A, 0, A.length - 1);
    }
}
