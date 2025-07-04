import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class ReverseTheString {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();
        Stack<StringBuilder> st = new Stack<>();
        int idx = 0, n = A.length();

        while (idx < n) {

            StringBuilder temp = new StringBuilder();

            while (idx < n && A.charAt(idx) != ' ')
                temp.append(A.charAt(idx++));

            st.push(temp);
            idx++;
        }

        while (st.size() != 0) {

            StringBuilder temp = st.pop();

            if (st.size() == 0) {
                sb.append(temp);
                break;
            }

            sb.append(temp + " ");
        }

        return sb.toString().trim();
    }
}
