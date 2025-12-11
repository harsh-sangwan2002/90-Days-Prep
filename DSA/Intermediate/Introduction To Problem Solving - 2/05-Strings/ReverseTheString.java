import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class ReverseTheString {

    public String solve(String A) {

        StringBuilder res = new StringBuilder();
        Stack<StringBuilder> st = new Stack<>();
        int idx = 0;

        while (idx < A.length()) {

            StringBuilder sb = new StringBuilder();

            while (idx < A.length() && A.charAt(idx) != ' ')
                sb.append(A.charAt(idx++));

            st.push(sb);
            idx++;
        }

        while (st.size() != 0) {
            StringBuilder sb = st.pop();
            res.append(sb + " ");
        }

        return res.toString().trim();
    }
}
