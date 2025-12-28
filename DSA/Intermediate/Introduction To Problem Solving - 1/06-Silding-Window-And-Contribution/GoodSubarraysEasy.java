// TC -> O(N^2)
// SC -> (1)
public class GoodSubarraysEasy {

    public int solve(int[] A, int B) {

        int good = 0, n = A.length;

        for (int i = 0; i < n; i++) {
            int sum = 0, len = 0;

            for (int j = i; j < n; j++) {
                sum += A[j];
                len++;

                if (len % 2 == 0 && sum < B)
                    good++;

                else if (len % 2 != 0 && sum > B)
                    good++;
            }
        }

        return good;
    }
}
