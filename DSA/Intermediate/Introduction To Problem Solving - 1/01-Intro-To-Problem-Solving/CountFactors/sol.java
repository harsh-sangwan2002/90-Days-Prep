// TC -> O(N)
// SC -> O(1)
public class sol {

    public int solve(int A) {

        int factors = 0;

        for (int i = 1; i <= A; i++) {

            if (A % i == 0)
                factors++;
        }

        return factors;
    }
}
