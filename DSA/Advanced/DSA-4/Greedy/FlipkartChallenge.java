import java.util.Arrays;
import java.util.PriorityQueue;

// TC -> O(N logN)
// SC -> O(N)
public class FlipkartChallenge {

    private class Pair {

        int expiry;
        int profit;

        public Pair(int expiry, int profit) {
            this.expiry = expiry;
            this.profit = profit;
        }
    }

    public int solve(int[] A, int[] B) {

        int n = A.length;
        Pair[] pairs = new Pair[n];

        for (int i = 0; i < n; i++)
            pairs[i] = new Pair(A[i], B[i]);

        Arrays.sort(pairs, (p1, p2) -> p1.expiry - p2.expiry);

        long ans = 0, mod = (long) (1e9 + 7);
        int T = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int i = 0; i < n; i++) {

            if (pairs[i].expiry > T) {
                pq.add(pairs[i].profit);
                T++;
            }

            else {

                if (pairs[i].profit > pq.peek()) {
                    pq.remove();
                    pq.add(pairs[i].profit);
                }
            }
        }

        while (pq.size() != 0)
            ans = (ans + pq.remove()) % mod;

        return (int) ans;
    }
}
