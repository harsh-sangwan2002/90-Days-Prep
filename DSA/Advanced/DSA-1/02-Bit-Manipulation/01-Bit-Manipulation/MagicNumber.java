// TC -> O(log N)
// SC -> O(1)
public class MagicNumber {

    public int solve(int A) {

        int pow = 5, ans = 0;

        while (A != 0) {
            int ld = A % 2;
            A /= 2;

            ans += ld * pow;
            pow *= 5;
        }

        return ans;
    }
}
