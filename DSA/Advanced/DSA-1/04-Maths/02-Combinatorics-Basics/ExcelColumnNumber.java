// TC -> O(N)
// SC -> O(1)
public class ExcelColumnNumber {

    public int titleToNumber(String A) {

        int n = A.length(), pow = 1, ans = 0;

        for (int i = n - 1; i >= 0; i--) {

            char ch = A.charAt(i);
            ans += (ch - 'A' + 1) * pow;
            pow *= 26;
        }

        return ans;
    }
}
