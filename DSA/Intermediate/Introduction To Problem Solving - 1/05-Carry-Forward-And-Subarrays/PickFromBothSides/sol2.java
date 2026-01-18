package PickFromBothSides;

// TC -> O(N)
// SC -> O(1)
public class sol2 {

    public int solve(int[] A, int B) {

        int n = A.length, sum = 0;

        for (int i = 0; i < B; i++)
            sum += A[i];

        int max = sum, j = n - 1, i = B - 1;

        while (i >= 0) {
            sum -= A[i];
            sum += A[j];
            max = Math.max(max, sum);

            i--;
            j--;
        }

        return max;
    }
}
