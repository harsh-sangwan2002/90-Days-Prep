package NumberOfDigitsOne;

// TC -> O(N*log N)
// SC -> O(1)
public class sol {

    public static int countOne(int n) {

        int ones = 0;

        while (n != 0) {
            int ld = n % 10;

            if (ld == 1)
                ones++;

            n /= 10;
        }

        return ones;
    }

    public static int solve(int n) {

        int ones = 0;

        for (int i = 1; i <= n; i++)
            ones += countOne(i);

        return ones;
    }

    public static void main(String[] args) {

        int n = 926;
        int ans = solve(n);

        System.out.println(ans);
    }
}
