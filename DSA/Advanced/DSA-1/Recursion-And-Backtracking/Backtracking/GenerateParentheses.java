import java.util.ArrayList;
import java.util.List;

// TC -> O(2^N)
// SC -> O(N)
public class GenerateParentheses {

    List<String> list;

    private void helper(int n, String ans, int open, int close) {

        if (ans.length() == 2 * n) {
            list.add(ans);
            return;
        }

        if (open < n)
            helper(n, ans + "(", open + 1, close);

        if (close < open)
            helper(n, ans + ")", open, close + 1);
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
