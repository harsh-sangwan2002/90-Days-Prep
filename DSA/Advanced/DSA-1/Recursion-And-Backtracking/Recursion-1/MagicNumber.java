public class MagicNumber {

    public int solve(int A) {

        int pow = 5, ans = 0;

        while (A != 0) {

            int digit = A % 2;
            A /= 2;

            ans += digit * pow;
            pow *= 5;
        }

        return ans;
    }
}
