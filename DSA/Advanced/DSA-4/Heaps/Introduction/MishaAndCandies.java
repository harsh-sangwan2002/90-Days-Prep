import java.util.PriorityQueue;

// TC -> O(N*log N)
// SC -> O(N)
public class MishaAndCandies {

    public int solve(int[] A, int B) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int total = 0;

        for (int val : A)
            pq.add(val);

        while (pq.size() != 0) {

            int candies = pq.remove();

            if (candies > B)
                break;

            int eat = candies / 2;
            total += eat;
            int left = candies - eat;

            if (pq.size() > 0)
                pq.add(pq.remove() + left);
        }

        return total;
    }
}
