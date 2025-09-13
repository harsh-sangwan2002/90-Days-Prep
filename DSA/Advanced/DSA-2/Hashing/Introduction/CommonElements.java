import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// TC -> O(N)
// SC -> O(N)
public class CommonElements {

    public int[] solve(int[] A, int[] B) {

        HashMap<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : B) {

            if (map.containsKey(val) && map.get(val) > 0) {
                list.add(val);
                map.put(val, map.get(val) - 1);
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
