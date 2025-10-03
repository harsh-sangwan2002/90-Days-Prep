import java.util.PriorityQueue;

// TC -> O(N log K)
// SC -> O(K)
public class KPlacesApart {

    public int[] solve(int[] A, int B) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int[] res = new int[A.length];
        int idx = 0;

        for (int i = 0; i < A.length; i++) {

            pq.add(A[i]);

            if (i >= B) {
                res[idx++] = pq.peek();
                pq.remove();
            }
        }

        while (pq.size() != 0)
            res[idx++] = pq.remove();

        return res;
    }
}
