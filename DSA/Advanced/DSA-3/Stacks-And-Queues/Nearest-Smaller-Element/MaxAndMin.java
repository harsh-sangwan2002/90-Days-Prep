import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class MaxAndMin {

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

    private int[] leftGreater(int[] A) {

        int n = A.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < n; i++) {

            while (st.size() != 0 && A[st.peek()] <= A[i])
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

    private int[] rightGreater(int[] A) {

        int n = A.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {

            while (st.size() != 0 && A[st.peek()] <= A[i])
                st.pop();

            res[i] = st.size() == 0 ? n : st.peek();
            st.push(i);
        }

        return res;
    }

    public int solve(int[] A) {

        int n = A.length;
        long ans = 0L, mod = (long) (1e9 + 7);

        int[] nsl = leftSmaller(A);
        int[] nsr = rightSmaller(A);
        int[] ngl = leftGreater(A);
        int[] ngr = rightGreater(A);

        for (int i = 0; i < n; i++) {

            long max = ((i - ngl[i]) * 1L * (ngr[i] - i)) % mod;
            long min = ((i - nsl[i]) * 1L * (nsr[i] - i)) % mod;
            long contri = ((A[i] * 1L) * (max - min)) % mod;

            ans = (ans + contri) % mod;
            ans = (ans + mod) % mod;
        }

        return (int) ans;
    }
}
