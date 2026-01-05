// TC -> O(N)
// SC -> O(N)
public class CheckPalindrome {

    private int checkPalindrome(String str, int st, int et) {

        if (st >= et)
            return 1;

        if (str.charAt(st) != str.charAt(et))
            return 0;

        st++;
        et--;

        return checkPalindrome(str, st, et);
    }

    public int solve(String A) {

        return checkPalindrome(A, 0, A.length() - 1);
    }
}
