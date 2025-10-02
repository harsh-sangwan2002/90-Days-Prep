import java.util.PriorityQueue;

// TC -> O(N log N)
// SC -> O(N)
public class ConnectRopes {

    public int solve(int[] A) {

        if (A.length == 1)
            return A[0];

        int cost = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int val : A)
            pq.add(val);

        while (pq.size() > 1) {

            int a = pq.remove();
            int b = pq.remove();
            cost += (a + b);

            pq.add(a + b);
        }

        return cost;
    }
}
