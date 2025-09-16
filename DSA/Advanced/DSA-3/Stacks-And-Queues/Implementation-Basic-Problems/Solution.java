import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class Solution {

    private int precendence(char ch) {

        if (ch == '+' || ch == '-')
            return 0;

        else if (ch == '/' || ch == '*')
            return 1;

        return 2;
    }

    public String solve(String A) {

        Stack<Character> st = new Stack<>();
        StringBuilder sb = new StringBuilder();

        for (char ch : A.toCharArray()) {

            if (ch == '(')
                st.push(ch);

            else if (ch == ')') {

                while (st.size() != 0 && st.peek() != '(')
                    sb.append(st.pop());

                st.pop();
            }

            else if (ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '^') {

                while (st.size() != 0 && st.peek() != '(' && precendence(st.peek()) >= precendence(ch))
                    sb.append(st.pop());

                st.push(ch);
            }

            else
                st.push(ch);
        }

        while (st.size() != 0)
            sb.append(st.pop());

        return sb.toString();
    }
}
