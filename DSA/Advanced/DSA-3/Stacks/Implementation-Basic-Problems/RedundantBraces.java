import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class RedundantBraces {

    public int braces(String A) {

        Stack<Character> st = new Stack<>();

        for (char ch : A.toCharArray()) {

            if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '(')
                st.push(ch);

            else {

                if (st.size() != 0 && st.peek() == '(')
                    return 1;

                while (st.peek() != '(')
                    st.pop();

                st.pop();
            }
        }

        return 0;
    }
}
