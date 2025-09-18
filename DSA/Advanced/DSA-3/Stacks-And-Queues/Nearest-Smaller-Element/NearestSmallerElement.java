import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class NearestSmallerElement {

    public int[] prevSmaller(int[] A) {

        int n = A.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < n; i++) {

            while (st.size() != 0 && st.peek() >= A[i])
                st.pop();

            res[i] = st.size() == 0 ? -1 : st.peek();

            st.push(A[i]);
        }

        return res;
    }
}
