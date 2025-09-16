import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class BalancedParenthesis {

    private boolean check(Stack<Character> st, char ch) {

        if (st.size() == 0 || st.peek() != ch)
            return false;

        st.pop();
        return true;
    }

    public int solve(String A) {

        Stack<Character> st = new Stack<>();

        for (char ch : A.toCharArray()) {

            if (ch == '(' || ch == '{' || ch == '[')
                st.push(ch);

            else if (ch == ')') {

                boolean flag = check(st, '(');

                if (!flag)
                    return 0;
            }

            else if (ch == '}') {

                boolean flag = check(st, '{');

                if (!flag)
                    return 0;
            }

            else if (ch == ']') {

                boolean flag = check(st, '[');

                if (!flag)
                    return 0;
            }
        }

        return st.size() == 0 ? 1 : 0;
    }
}
