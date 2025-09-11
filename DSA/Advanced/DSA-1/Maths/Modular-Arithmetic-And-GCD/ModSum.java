// TC -> O(1)
// SC -> O(1)
public class ModSum {

    public int solve(int[] A) {

        int[] freq = new int[1001];
        long sum = 0, mod = (long) (1e9 + 7);

        for (int val : A)
            freq[val]++;

        for (int i = 1; i < 1001; i++) {

            for (int j = 1; j < 1001; j++) {

                int a = freq[i], b = freq[j];
                long contri = (a * 1L * b * (i % j)) % mod;
                sum = (sum + contri) % mod;
            }
        }

        return (int) sum;
    }
}
