// TC -> O(1)
// SC -> O(1)
public class UnsetBits {

    private boolean checkBit(long n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public long solve(long A, int B) {

        for (int pos = 0; pos < B; pos++) {

            if (checkBit(A, pos))
                A = (A ^ (1 << pos));
        }

        return A;
    }
}
