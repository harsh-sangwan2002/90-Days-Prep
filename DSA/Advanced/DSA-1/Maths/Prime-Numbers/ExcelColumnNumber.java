// TC -> O(N)
// SC -> O(1)
public class ExcelColumnNumber {

    public int titleToNumber(String A) {

        int pow = 1, ans = 0;

        for (int i = A.length() - 1; i >= 0; i--) {

            char ch = A.charAt(i);
            ans = (ans + (ch - 'A' + 1) * pow);
            pow *= 26;
        }

        return ans;
    }
}
