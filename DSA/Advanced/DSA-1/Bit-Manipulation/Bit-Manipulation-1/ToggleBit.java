// TC -> O(1)
// SC -> O(1)
public class ToggleBit {

    public int solve(int A, int B) {

        return (A ^ (1 << B));
    }
}
