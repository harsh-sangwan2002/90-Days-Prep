// TC -> O(1)
// SC -> O(1)

public class UnsetBit {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int solve(int A, int B) {

        if (checkBit(A, B))
            A = A ^ (1 << B);

        return A;
    }
}
