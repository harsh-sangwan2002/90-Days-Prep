// TC -> O(N)
// SC -> O(N)
public class Factorial {

    public int solve(int A) {

        if (A <= 1)
            return 1;

        return A * solve(A - 1);
    }
}
