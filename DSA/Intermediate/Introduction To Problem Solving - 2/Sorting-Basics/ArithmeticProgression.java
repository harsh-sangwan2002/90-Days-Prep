import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(1)
public class ArithmeticProgression {

    public int solve(int[] A) {

        Arrays.sort(A);
        int n = A.length, diff = A[1] - A[0];

        for (int i = 2; i < n; i++) {

            int curr = A[i] - A[i - 1];

            if (curr != diff)
                return 0;
        }

        return 1;
    }
}
