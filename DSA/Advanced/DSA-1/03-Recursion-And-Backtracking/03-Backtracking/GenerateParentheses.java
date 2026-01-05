import java.util.ArrayList;
import java.util.List;

// TC -> O(2^A)
// SC -> O(A)
public class GenerateParentheses {

    List<String> list;

    private void helper(int n, String str, int open, int closed) {

        if (str.length() == 2 * n) {
            list.add(str);
            return;
        }

        if (open < n)
            helper(n, str + "(", open + 1, closed);

        if (closed < open)
            helper(n, str + ")", open, closed + 1);
    }

    public String[] generateParenthesis(int A) {

        list = new ArrayList<>();

        helper(A, "", 0, 0);

        String[] res = new String[list.size()];
        int idx = 0;

        for (String str : list)
            res[idx++] = str;

        return res;
    }
}
