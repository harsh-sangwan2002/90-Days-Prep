// TC -> O(N)
// SC -> O(N)
public class Factorial {

    public int solve(int A) {

        if (A == 0 || A == 1)
            return 1;

        return solve(A - 1) * A;
    }
}
