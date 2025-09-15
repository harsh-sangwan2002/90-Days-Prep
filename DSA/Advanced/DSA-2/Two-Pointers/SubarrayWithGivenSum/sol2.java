package SubarrayWithGivenSum;

// TC -> O(N)
// SC -> O(1)
public class sol2 {

    public int[] solve(int[] A, int B) {

        int sum = A[0], i = 0, j = 0, st = -1, et = -1;

        while (j < A.length) {

            if (sum == B) {
                st = i;
                et = j;
                break;
            }

            else if (sum < B) {
                j++;

                if (j < A.length)
                    sum += A[j];
            }

            else {

                sum -= A[i];
                i++;

                if (j < i && i < A.length) {
                    j = i;
                    sum = A[j];
                }
            }
        }

        if (st == -1)
            return new int[] { -1 };

        int[] res = new int[et - st + 1];

        for (int x = st; x <= et; x++)
            res[x - st] = A[x];

        return res;
    }
}
