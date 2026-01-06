// TC -> O(N*log M)
// SC -> O(N)
public class DeleteOne {

    private int gcd(int a, int b) {

        if (a == 0)
            return b;
        if (b == 0)
            return a;

        return gcd(b, a % b);
    }

    public int solve(int[] A) {

        int n = A.length;
        int[] left = new int[n], right = new int[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                left[i] = A[i];

            else
                left[i] = gcd(left[i - 1], A[i]);
        }

        for (int i = n - 1; i >= 0; i--) {

            if (i == n - 1)
                right[i] = A[i];

            else
                right[i] = gcd(right[i + 1], A[i]);
        }

        int max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {

            int gcd = 0;

            if (i == 0)
                gcd = right[i + 1];

            else if (i == n - 1)
                gcd = left[i - 1];

            else
                gcd = gcd(left[i - 1], right[i + 1]);

            max = Math.max(max, gcd);
        }

        return max;
    }
}
