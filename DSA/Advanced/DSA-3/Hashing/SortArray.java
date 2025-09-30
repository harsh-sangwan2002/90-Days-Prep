import java.util.Arrays;
import java.util.HashMap;

public class SortArray {

    public int[] solve(int[] A, int[] B) {

        int n = A.length, idx = 0;
        int[] res = new int[n];
        HashMap<Integer, Integer> map = new HashMap<>();

        Arrays.sort(A);

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : B) {

            if (map.containsKey(val)) {

                for (int i = 1; i <= map.get(val); i++)
                    res[idx++] = val;

                map.remove(val);
            }
        }

        for (int val : A) {

            if (map.containsKey(val))
                res[idx++] = val;
        }

        return res;
    }
}
