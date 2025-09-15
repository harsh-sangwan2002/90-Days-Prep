// TC -> O(N)
// SC -> O(1)
public class MaxContinuousSeries {

    public int[] maxone(int[] A, int B) {

        int i = 0, j = 0;
        int max = 0, zc = 0, st = 0;

        while (j < A.length) {

            if (A[j] == 0)
                zc++;

            while (zc > B) {

                if (A[i] == 0)
                    zc--;

                i++;
            }

            int oc = j - i + 1;
            if (oc > max) {
                max = oc;
                st = i;
            }

            j++;
        }

        int[] res = new int[max];

        for (int x = 0; x < max; x++)
            res[x] = st + x;

        return res;
    }
}
