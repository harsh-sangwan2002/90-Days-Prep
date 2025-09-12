import java.util.Arrays;

// TC -> O(N log N)
// SC -> O(1)
public class MinXorValue {

    public int findMinXor(int[] A) {

        Arrays.sort(A);
        int n = A.length, min = A[0] ^ A[1];

        for (int i = 2; i < n; i++) {

            int curr = A[i] ^ A[i - 1];
            min = Math.min(min, curr);
        }

        return min;
    }
}
