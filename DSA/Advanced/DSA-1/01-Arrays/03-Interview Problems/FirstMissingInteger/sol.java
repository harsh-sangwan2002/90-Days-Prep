package FirstMissingInteger;

import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class sol {

    public int firstMissingPositive(int[] A) {

        Set<Integer> set = new HashSet<>();

        for (int val : A) {
            if (val > 0)
                set.add(val);
        }

        for (int i = 1; i <= A.length + 2; i++) {
            if (!set.contains(i))
                return i;
        }

        return A.length + 2;
    }
}
