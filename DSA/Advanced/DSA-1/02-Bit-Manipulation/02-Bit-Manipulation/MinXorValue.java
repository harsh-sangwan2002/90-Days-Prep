import java.util.Arrays;

// TC -> O(N*log N)
// SC -> O(log N)
public class MinXorValue {

    public int findMinXor(int[] A) {

        Arrays.sort(A);
        int min = A[0] ^ A[1];

        for (int i = 2; i < A.length; i++) {
            int xCurr = A[i] ^ A[i - 1];
            min = Math.min(min, xCurr);
        }

        return min;
    }
}
