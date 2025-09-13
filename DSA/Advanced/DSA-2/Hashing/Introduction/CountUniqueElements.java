import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class CountUniqueElements {

    public int solve(int[] A) {

        int count = 0;
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : A) {

            if (map.get(val) == 1)
                count++;
        }

        return count;
    }
}
