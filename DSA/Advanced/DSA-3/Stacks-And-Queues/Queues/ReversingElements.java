import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class ReversingElements {

    public int[] solve(int[] A, int B) {

        Queue<Integer> q = new ArrayDeque<>();
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < B; i++)
            q.add(A[i]);

        while (q.size() != 0)
            st.add(q.remove());

        int idx = 0;

        while (st.size() != 0)
            A[idx++] = st.pop();

        while (q.size() != 0)
            A[idx++] = q.remove();

        return A;
    }
}
