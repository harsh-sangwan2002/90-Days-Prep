// TC -> O(sqrt(N))
// SC -> O(1)
public class sol2 {

    public int solve(int A) {

        int factors = 0;

        for (int i = 1; i * i <= A; i++) {

            if (A % i == 0) {

                if (i * i == A)
                    factors++;

                else
                    factors += 2;
            }
        }

        return factors;
    }
}
