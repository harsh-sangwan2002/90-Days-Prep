import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class CheckPairSum {

    public int solve(int A, int[] B) {

        Set<Integer> set = new HashSet<>();

        for (int val : B) {

            int comp = A - val;

            if (set.contains(comp))
                return 1;

            set.add(val);
        }

        return 0;
    }
}
