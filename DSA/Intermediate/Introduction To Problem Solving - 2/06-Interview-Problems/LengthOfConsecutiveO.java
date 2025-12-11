// TC -> O(N)
// SC -> O(1)
public class LengthOfConsecutiveO {

    public int solve(String A) {

        int n = A.length(), ones = 0, count = 0;

        for (char ch : A.toCharArray()) {

            if (ch == '1')
                ones++;
        }

        if (ones == n)
            return n;

        for (int i = 0; i < n; i++) {
            char ch = A.charAt(i);

            if (ch == '0') {

                int l = 0, r = 0, j = i - 1;

                while (j >= 0 && A.charAt(j) == '1') {
                    l++;
                    j--;
                }

                j = i + 1;
                while (j < n && A.charAt(j) == '1') {
                    r++;
                    j++;
                }

                if (l + r == ones)
                    count = ones;

                else
                    count = Math.max(count, l + r + 1);
            }
        }

        return count;
    }
}
