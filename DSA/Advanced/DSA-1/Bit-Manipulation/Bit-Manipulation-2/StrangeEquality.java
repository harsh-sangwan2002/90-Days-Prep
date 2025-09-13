// TC -> O(log A)
// SC -> O(1)
public class StrangeEquality {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int temp = A, bits = 0;

        while (temp != 0) {
            bits++;
            temp = temp >> 1;
        }

        int Y = (1 << bits);

        int X = 0, pos = 0;

        while (A != 0) {

            if (!checkBit(A))
                X += (1 << pos);

            pos++;
            A = A >> 1;
        }

        return X ^ Y;
    }
}
