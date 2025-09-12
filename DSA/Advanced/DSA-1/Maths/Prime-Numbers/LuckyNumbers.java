// TC -> O(N log(log N))
// SC -> O(N)
public class LuckyNumbers {

    public int solve(int A) {

        int[] primes = new int[A + 1];
        int count = 0;

        for (int i = 2; i <= A; i++) {

            if (primes[i] == 0) {

                for (int j = i; j <= A; j += i)
                    primes[j]++;
            }

            else if (primes[i] == 2)
                count++;
        }

        return count;
    }
}
