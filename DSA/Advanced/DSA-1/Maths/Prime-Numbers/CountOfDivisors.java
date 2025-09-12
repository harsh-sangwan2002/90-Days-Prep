import java.util.HashMap;

// TC -> O(N*log(log N))
// SC -> O(N)
public class CountOfDivisors {

    private int findMax(int[] A) {

        int max = A[0];

        for (int val : A)
            max = Math.max(max, val);

        return max;
    }

    public int[] solve(int[] A) {

        int max = findMax(A);
        int[] spf = new int[max + 1];

        for (int i = 0; i <= max; i++)
            spf[i] = i;

        for (int i = 2; i <= Math.sqrt(max); i++) {

            if (spf[i] == i) {

                for (int j = i * i; j <= max; j += i)
                    spf[j] = i;
            }
        }

        for (int i = 0; i < A.length; i++) {

            int val = A[i];
            HashMap<Integer, Integer> map = new HashMap<>();

            while (val != 1) {
                map.put(spf[val], map.getOrDefault(spf[val], 0) + 1);
                val /= spf[val];
            }

            int ans = 1;
            for (int key : map.keySet()) {

                int freq = map.get(key) + 1;
                ans *= freq;
            }

            A[i] = ans;
        }

        return A;
    }
}
