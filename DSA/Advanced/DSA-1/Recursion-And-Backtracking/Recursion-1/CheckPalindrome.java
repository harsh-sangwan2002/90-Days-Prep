// TC -> O(N)
// SC -> O(N)
public class CheckPalindrome {

    private int help(String str, int lo, int hi) {

        if (lo > hi)
            return 1;

        if (str.charAt(lo) != str.charAt(hi))
            return 0;

        lo++;
        hi--;
        return help(str, lo, hi);
    }

    public int solve(String A) {

        return help(A, 0, A.length() - 1);
    }
}
