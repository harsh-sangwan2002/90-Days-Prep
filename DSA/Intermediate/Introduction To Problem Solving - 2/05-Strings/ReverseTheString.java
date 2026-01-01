import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class ReverseTheString {

    public String solve(String A) {

        Stack<StringBuilder> st = new Stack<>();
        int idx = 0, n = A.length();

        while (idx < n) {

            StringBuilder temp = new StringBuilder();
            while (idx < n && A.charAt(idx) != ' ') {
                temp.append(A.charAt(idx));
                idx++;
            }

            st.push(temp);
            idx++;
        }

        StringBuilder res = new StringBuilder();
        while (st.size() != 0) {
            StringBuilder temp = st.pop();
            res.append(temp + " ");
        }

        return res.toString().trim();
    }
}
