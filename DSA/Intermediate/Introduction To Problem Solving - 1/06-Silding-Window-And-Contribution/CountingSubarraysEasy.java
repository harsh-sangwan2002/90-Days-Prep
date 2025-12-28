// TC -> O(N^2)
// SC -> O(1)
public class CountingSubarraysEasy {

    public int solve(int[] A, int B) {

        int count = 0, n = A.length;

        for (int i = 0; i < n; i++) {
            int sum = 0;

            for (int j = i; j < n; j++) {

                sum += A[j];

                if (sum < B)
                    count++;

                else
                    break;
            }
        }

        return count;
    }
}
