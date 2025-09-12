import java.util.ArrayList;
import java.util.List;

// TC -> O(N* 4^n)
// SC -> O(N* 4^N)
public class LetterPhone {

    String[] codes = { "0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };
    List<String> res;

    private void helper(String str, String ans) {

        if (str.length() == 0) {

            String temp = new String(ans);
            res.add(temp);
            return;
        }

        char ch = str.charAt(0);
        String ros = str.substring(1);

        for (int i = 0; i < codes[ch - '0'].length(); i++) {
            helper(ros, ans + codes[ch - '0'].charAt(i));
        }
    }

    public String[] letterCombinations(String A) {

        res = new ArrayList<>();

        helper(A, "");

        String[] ans = new String[res.size()];
        int idx = 0;

        for (String str : res)
            ans[idx++] = str;

        return ans;
    }
}
