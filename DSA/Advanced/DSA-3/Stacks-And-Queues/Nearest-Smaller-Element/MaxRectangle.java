import java.util.Stack;

// TC -> O(N*M)
// SC -> O(M)
public class MaxRectangle {

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

    private int largestHistogram(int[] A) {

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

    public int maximalRectangle(int[][] A) {

        int[] heights = new int[A[0].length];

        for (int i = 0; i < A[0].length; i++)
            heights[i] = A[0][i];

        int maxRect = largestHistogram(heights);

        for (int i = 1; i < A.length; i++) {

            for (int j = 0; j < A[i].length; j++) {

                if (A[i][j] == 1)
                    heights[j]++;

                else
                    heights[j] = 0;
            }

            maxRect = Math.max(maxRect, largestHistogram(heights));
        }

        return maxRect;
    }
}
