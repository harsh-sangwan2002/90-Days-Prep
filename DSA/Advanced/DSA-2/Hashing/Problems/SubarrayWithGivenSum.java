import java.util.HashMap;

// TC -> O(N)
// SC -> O(N)
public class SubarrayWithGivenSum {

    public int[] solve(int[] A, int B) {

        int n = A.length, st = -1, len = 0;
        long[] pre = new long[n];

        HashMap<Long, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = A[i] * 1L;

            else
                pre[i] = pre[i - 1] + A[i];

            if (pre[i] == B) {

                int[] res = new int[i + 1];

                for (int j = 0; j <= i; j++)
                    res[j] = A[j];

                return res;
            }
        }

        for (int i = 0; i < n; i++) {

            long val = pre[i], comp = val - B;

            if (map.containsKey(comp)) {
                st = map.get(comp) + 1;
                len = i - map.get(comp);
                break;
            }

            map.put(val, i);
        }

        if (st == -1)
            return new int[] { -1 };

        int[] res = new int[len];

        for (int i = st; i < st + len; i++)
            res[i - st] = A[i];

        return res;
    }
}
