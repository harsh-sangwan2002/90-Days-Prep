// TC -> O(N)
// SC -> O(1)
public class SpecialSubsequences {

    public int solve(String A) {

        long ans = 0L, mod = (long) (1e9 + 7);
        long countA = 0L;

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch == 'A')
                countA = (countA + 1) % mod;

            else if (ch == 'G')
                ans = (ans + countA) % mod;
        }

        return (int) ans;
    }
}
