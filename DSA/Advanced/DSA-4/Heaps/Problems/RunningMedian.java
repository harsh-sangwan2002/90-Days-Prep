import java.util.Collections;
import java.util.PriorityQueue;

// TC -> O(N log N)
// SC -> O(N)
public class RunningMedian {

    public int[] solve(int[] A) {

        PriorityQueue<Integer> maxh = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> minh = new PriorityQueue<>();
        maxh.add(A[0]);

        for (int i = 1; i < A.length; i++) {

            int val = A[i];

            if (val < maxh.peek())
                maxh.add(val);

            else
                minh.add(val);

            if (maxh.size() - minh.size() > 1)
                minh.add(maxh.remove());

            else if (minh.size() - maxh.size() > 1)
                maxh.add(minh.remove());

            int s = maxh.size() + minh.size();

            if (s % 2 == 1) {

                if (maxh.size() > minh.size())
                    A[i] = maxh.peek();

                else
                    A[i] = minh.peek();
            }

            else
                A[i] = maxh.peek();
        }

        return A;
    }
}
