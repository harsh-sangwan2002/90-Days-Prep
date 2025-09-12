// TC -> O(N)
// SC -> O(N)
public class Print {

    private void print(int n) {

        if (n == 0)
            return;

        print(n - 1);
        System.out.print(n + " ");
    }

    public void solve(int A) {

        print(A);
        System.out.println();
    }
}
