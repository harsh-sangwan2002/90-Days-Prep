import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(1)
public class MinXorValue {

    public int findMinXor(int[] A) {

        Arrays.sort(A);
        int minVal = A[0] ^ A[1];

        for (int i = 2; i < A.length; i++) {

            int curr = A[i] ^ A[i - 1];
            minVal = Math.min(minVal, curr);
        }

        return minVal;
    }
}
