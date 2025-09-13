// TC -> O(N)
// SC -> O(1)
public class MaxChunks {

    public int solve(int[] A) {

        int n = A.length, max = A[0], chunks = 0;

        for (int i = 0; i < n; i++) {

            max = Math.max(max, A[i]);

            if (max == i)
                chunks++;
        }

        return chunks;
    }
}
