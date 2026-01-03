// TC -> O(log N)
// SC -> O(1)
public class StrangeEquality {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int bits = 0, n = A;

        while (n != 0) {
            bits++;
            n = n >> 1;
        }

        int Y = (1 << bits), X = 0, pos = 0;

        while (A != 0) {

            if (!checkBit(A))
                X += (1 << pos);

            pos++;
            A = A >> 1;
        }

        return X ^ Y;
    }
}
