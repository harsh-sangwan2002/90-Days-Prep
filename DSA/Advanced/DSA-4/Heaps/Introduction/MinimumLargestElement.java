import java.util.PriorityQueue;

// TC -> O(N log N + B log N)
// SC -> O(N)
public class MinimumLargestElement {

    private class Pair implements Comparable<Pair> {

        int ele;
        int idx;

        public Pair(int ele, int idx) {
            this.ele = ele;
            this.idx = idx;
        }

        @Override
        public int compareTo(Pair o) {
            return this.ele - o.ele;
        }
    }

    public int solve(int[] A, int B) {

        PriorityQueue<Pair> pq = new PriorityQueue<>();

        int n = A.length;
        int[] state = new int[n];

        for (int i = 0; i < n; i++) {
            pq.add(new Pair(2 * A[i], i));
            state[i] = A[i];
        }

        while (B-- > 0) {
            Pair top = pq.remove();
            state[top.idx] = top.ele;
            pq.add(new Pair(A[top.idx] + top.ele, top.idx));
        }

        int max = state[0];
        for (int val : state)
            max = Math.max(max, val);

        return max;
    }
}
