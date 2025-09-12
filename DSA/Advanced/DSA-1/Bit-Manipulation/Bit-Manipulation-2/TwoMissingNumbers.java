import java.util.Arrays;

// TC -> O(N)
// SC -> O(1)
public class TwoMissingNumbers {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int[] solve(int[] A) {

        int[] res = new int[2];
        int xor = 0, set = 0, unset = 0, n = A.length;

        for (int val : A)
            xor ^= val;

        for (int i = 1; i <= n + 2; i++)
            xor ^= i;

        int pos = 0;
        while (true) {

            if (checkBit(xor, pos))
                break;

            pos++;
        }

        for (int val : A) {

            if (checkBit(val, pos))
                set ^= val;

            else
                unset ^= val;
        }

        for (int i = 1; i <= n + 2; i++) {

            if (checkBit(i, pos))
                set ^= i;

            else
                unset ^= i;
        }

        res[0] = set;
        res[1] = unset;
        Arrays.sort(res);
        return res;
    }
}
