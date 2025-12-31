import java.util.Arrays;

// TC -> O(N*log N)
// SC -> O(log N)
public class ElementsRemoval {

    public int solve(int[] A) {

        Arrays.sort(A);
        int cost = 0, count = 1;

        for (int i = A.length - 1; i >= 0; i--) {
            cost += A[i] * count;
            count++;
        }

        return cost;
    }
}
