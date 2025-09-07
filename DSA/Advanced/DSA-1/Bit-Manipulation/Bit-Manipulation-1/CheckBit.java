// TC -> O(1)
// SC -> O(1)

public class CheckBit {

    public int solve(int A, int B) {

        if ((A & (1 << B)) != 0)
            return 1;

        return 0;
    }
}
