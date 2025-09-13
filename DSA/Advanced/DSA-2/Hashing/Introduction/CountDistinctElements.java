import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class CountDistinctElements {

    public int solve(int[] A) {

        Set<Integer> set = new HashSet<>();

        for (int val : A)
            set.add(val);

        return set.size();
    }
}
