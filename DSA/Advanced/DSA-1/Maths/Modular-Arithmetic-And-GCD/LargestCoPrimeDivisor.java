// TC -> O(log(min(A,B)))
// SC -> O(1)
public class LargestCoPrimeDivisor {

    private int gcd(int a, int b) {

        if (a == 0)
            return b;
        if (b == 0)
            return a;

        return gcd(b, a % b);
    }

    public int cpFact(int A, int B) {

        while (gcd(A, B) != 1) {
            A /= gcd(A, B);
        }

        return A;
    }
}
