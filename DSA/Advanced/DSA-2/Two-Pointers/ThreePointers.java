// TC -> O(N)
// SC -> O(1)
public class ThreePointers {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int minimize(final int[] A, final int[] B, final int[] C) {

        int ans = Integer.MAX_VALUE, max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;
        int i = 0, j = 0, k = 0;

        while (i < A.length && j < B.length && k < C.length) {

            max = Math.max(A[i], Math.max(B[j], C[k]));
            min = Math.min(A[i], Math.min(B[j], C[k]));

            int diff = max - min;
            ans = Math.min(diff, ans);

            if (diff == 0)
                break;

            if (min == A[i])
                i++;

            else if (min == B[j])
                j++;

            else
                k++;
        }

        return ans;
    }
}
