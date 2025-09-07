// TC -> O(N)
// SC -> O(1)

public class UnsetXBits {

    private boolean checkBit(long n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public long solve(long A, int B) {

        for (int i = 0; i < B; i++) {

            if (checkBit(A, i))
                A = A ^ (1 << i);
        }

        return A;
    }
}
