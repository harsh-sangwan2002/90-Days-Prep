import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(1)
public class ElementsRemoval {

    public int solve(int[] A) {

        Arrays.sort(A);
        int cost = 0, count = 1, n = A.length;

        for (int i = n - 1; i >= 0; i--) {
            cost += count * A[i];
            count++;
        }

        return cost;
    }
}
