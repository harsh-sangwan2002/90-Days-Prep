// TC -> O(N^2)
// SC -> O(N)
public class SortedPermutationRank {

    private long mod = (long) (1e6 + 3);

    private long factorial(int n) {

        if (n <= 1)
            return 1L;

        return n * 1L * factorial(n - 1) % mod;
    }

    public int findRank(String A) {

        long ans = 0L;
        int n = A.length();

        for (int i = 0; i < n; i++) {

            int count = 0;
            for (int j = i + 1; j < n; j++) {

                if (A.charAt(j) < A.charAt(i))
                    count++;
            }

            ans = (ans + count * 1L * factorial(n - i - 1)) % mod;
        }

        return (int) (ans + 1);
    }
}
