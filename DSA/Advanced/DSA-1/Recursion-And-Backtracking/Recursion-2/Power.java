// TC -> O(log N)
// SC -> O(log N)
public class Power {

    public int pow(int A, int B, int C) {

        if (A == 0)
            return 0;
        if (B == 0)
            return 1;

        long ans = pow(A, B / 2, C) % C * 1L;
        ans = (ans * ans) % C;

        if (B % 2 == 1)
            ans = (ans * A) % C;

        if (ans < 0)
            ans = (ans + C) % C;

        return (int) ans;
    }
}
