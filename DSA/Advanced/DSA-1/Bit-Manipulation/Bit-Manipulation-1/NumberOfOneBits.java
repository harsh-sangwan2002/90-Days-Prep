// TC -> O(log N)
// SC -> O(1)
public class NumberOfOneBits {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int numSetBits(int A) {

        int count = 0;

        while (A != 0) {

            if (checkBit(A))
                count++;

            A = A >> 1;
        }

        return count;
    }
}
