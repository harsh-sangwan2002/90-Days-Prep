import java.util.HashMap;

// TC -> O(N)
// SC -> O(B)
public class DistinctNumbersInWindow {

    public int[] dNums(int[] A, int B) {

        int n = A.length;
        int[] res = new int[n - B + 1];
        int idx = 0;

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < B; i++)
            map.put(A[i], map.getOrDefault(A[i], 0) + 1);

        res[idx++] = map.size();

        for (int i = B; i < n; i++) {

            int prev = A[i - B];

            if (map.get(prev) == 1)
                map.remove(prev);

            else
                map.put(prev, map.get(prev) - 1);

            map.put(A[i], map.getOrDefault(A[i], 0) + 1);
            res[idx++] = map.size();
        }

        return res;
    }
}
