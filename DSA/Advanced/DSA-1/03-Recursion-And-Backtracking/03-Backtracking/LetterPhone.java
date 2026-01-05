import java.util.ArrayList;
import java.util.List;

// TC -> O(N*4^N)
// SC -> O(N*4^N)
public class LetterPhone {

    private String[] codes = { "0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    private void helper(String str, String ans, List<String> res) {

        if (str.length() == 0) {
            res.add(ans);
            return;
        }

        char ch = str.charAt(0);
        String ros = str.substring(1);

        for (int i = 0; i < codes[ch - '0'].length(); i++) {
            helper(ros, ans + codes[ch - '0'].charAt(i), res);
        }
    }

    public String[] letterCombinations(String A) {

        List<String> res = new ArrayList<>();
        helper(A, "", res);

        String[] ans = new String[res.size()];
        int idx = 0;

        for (String str : res)
            ans[idx++] = str;

        return ans;
    }
}
