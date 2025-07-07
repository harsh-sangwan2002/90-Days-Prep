import java.util.Arrays;

// TC -> O(N)
// SC -> O(1)
public class SingleNumber3 {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int[] solve(int[] A) {

        int xor = 0, set = 0, unset = 0;
        int[] res = new int[2];

        for (int val : A)
            xor ^= val;

        int pos = 0;
        while (xor != 0) {

            if (checkBit(xor, 0))
                break;

            xor = xor >> 1;
            pos++;
        }

        for (int val : A) {

            if (checkBit(val, pos))
                set ^= val;

            else
                unset ^= val;
        }

        res[0] = set;
        res[1] = unset;
        Arrays.sort(res);
        return res;
    }
}
