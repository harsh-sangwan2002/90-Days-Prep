import java.util.HashMap;

// TC -> O(N+M)
// SC -> O(N)
public class FrequencyOfElementQuery {

    public int[] solve(int[] A, int[] B) {

        HashMap<Integer, Integer> map = new HashMap<>();
        int[] res = new int[B.length];

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int i = 0; i < B.length; i++) {
            res[i] = map.getOrDefault(B[i], 0);
        }

        return res;
    }
}
