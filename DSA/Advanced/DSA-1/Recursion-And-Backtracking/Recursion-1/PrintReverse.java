// TC -> O(N)
// SC -> O(N)
public class PrintReverse {

    private void print(int n) {

        if (n == 0)
            return;

        System.out.print(n + " ");
        print(n - 1);
    }

    public void solve(int A) {

        print(A);
        System.out.println();
    }
}
