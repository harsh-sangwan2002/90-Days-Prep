// TC -> O(N^2)
// SC -> O(1)
public class SortedPermutationRank {

    long mod = (long) (1e6 + 3);

    private long factorial(int n) {

        if (n <= 1)
            return 1;

        return n * factorial(n - 1) * 1L % mod;
    }

    public int findRank(String A) {

        long ans = 0L;

        for (int i = 0; i < A.length(); i++) {

            int count = 0;
            for (int j = i + 1; j < A.length(); j++) {

                if (A.charAt(i) > A.charAt(j))
                    count++;
            }

            ans = (ans + count * 1L * factorial(A.length() - i - 1)) % mod;
        }

        return (int) ((ans + 1) % mod);
    }
}
