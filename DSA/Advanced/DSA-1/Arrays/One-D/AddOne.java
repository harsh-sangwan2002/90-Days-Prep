// TC -> O(N)
// SC -> O(N)
public class AddOne {

    public int[] plusOne(int[] A) {

        int zeroes = 0;

        for (int val : A) {

            if (val == 0)
                zeroes++;

            else
                break;
        }

        int n = A.length;
        int[] res = new int[n - zeroes];

        for (int i = zeroes; i < n; i++)
            res[i - zeroes] = A[i];

        for (int i = res.length - 1; i >= 0; i--) {

            if (res[i] != 9) {
                res[i]++;
                return res;
            }

            res[i] = 0;
        }

        res = new int[res.length + 1];
        res[0] = 1;
        return res;
    }
}
