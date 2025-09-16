import java.util.Stack;

// TC -> O(N)
// SC -> O(N)
public class EvaluateExpression {

    private int operation(int v1, int v2, String str) {

        if (str.equals("+"))
            return v1 + v2;

        else if (str.equals("-"))
            return v1 - v2;

        else if (str.equals("*"))
            return v1 * v2;

        else
            return v1 / v2;
    }

    public int evalRPN(String[] A) {

        Stack<Integer> st = new Stack<>();

        for (String str : A) {

            if (str.equals("+") || str.equals("-") || str.equals("/") || str.equals("*")) {

                int v2 = st.pop();
                int v1 = st.pop();

                int val = operation(v1, v2, str);
                st.push(val);
            }

            else
                st.push(Integer.parseInt(str));
        }

        return st.pop();
    }
}
