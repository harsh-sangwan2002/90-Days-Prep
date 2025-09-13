import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class CountPairDifference {

    public int solve(int[] A, int B) {

        HashMap<Integer, Integer> map = new HashMap<>();
        long ans = 0L, mod = (long) (1e9 + 7);

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : A) {

            int comp = val - B;

            if (map.containsKey(comp))
                ans = (ans + map.get(comp)) % mod;
        }

        return (int) ans;
    }
}
