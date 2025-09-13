// TC -> O(N+K)
// SC -> O(K)
public class CountSort {

    private int[] findMaxMin(int[] A) {

        int max = A[0], min = A[0];

        for (int val : A) {
            max = Math.max(max, val);
            min = Math.min(min, val);
        }

        return new int[] { max, min };
    }

    public int[] solve(int[] A) {

        int[] maxMin = findMaxMin(A);
        int max = maxMin[0], min = maxMin[1], idx = 0;
        int[] freq = new int[max - min + 1];

        for (int val : A)
            freq[val - min]++;

        for (int i = 0; i < freq.length; i++) {

            for (int j = 1; j <= freq[i]; j++)
                A[idx++] = i + min;
        }

        return A;
    }
}
