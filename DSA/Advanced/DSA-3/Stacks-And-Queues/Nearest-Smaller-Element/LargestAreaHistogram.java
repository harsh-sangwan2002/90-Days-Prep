import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class LargestAreaHistogram {

    private int[] leftSmaller(int[] A) {

        int n = A.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < n; i++) {

            while (st.size() != 0 && A[st.peek()] >= A[i])
                st.pop();

            res[i] = st.size() == 0 ? -1 : st.peek();
            st.push(i);
        }

        return res;
    }

    private int[] rightSmaller(int[] A) {

        int n = A.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {

            while (st.size() != 0 && A[st.peek()] >= A[i])
                st.pop();

            res[i] = st.size() == 0 ? n : st.peek();
            st.push(i);
        }

        return res;
    }

    public int largestRectangleArea(int[] A) {

        int[] left = leftSmaller(A);
        int[] right = rightSmaller(A);
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < A.length; i++) {

            int width = right[i] - left[i] - 1;
            int area = A[i] * width;
            max = Math.max(max, area);
        }

        return max;
    }
}
