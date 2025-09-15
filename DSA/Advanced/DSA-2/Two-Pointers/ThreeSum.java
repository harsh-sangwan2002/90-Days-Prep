import java.util.Arrays;

// TC -> O(N * log(N))
// SC -> O(1)
public class ThreeSum {

    public int threeSumClosest(int[] A, int B) {

        Arrays.sort(A);
        int diff = Integer.MAX_VALUE, sum = 0;

        for (int i = 0; i < A.length - 2; i++) {

            int j = 0, k = A.length - 1;
            while (j < k) {

                if (Math.abs(A[i] + A[j] + A[k] - B) < diff) {
                    diff = Math.abs(A[i] + A[j] + A[k] - B);
                    sum = A[i] + A[j] + A[k];
                }

                else if (A[i] + A[j] + A[k] > B)
                    k--;

                else
                    j++;
            }
        }

        return sum;
    }
}
