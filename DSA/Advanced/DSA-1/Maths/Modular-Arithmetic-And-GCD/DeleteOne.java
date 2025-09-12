// TC -> O(N*log(max(A)))
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

        int n = A.length, max = Integer.MIN_VALUE;
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

        for (int i = 0; i < n; i++) {

            if (i == 0)
                max = Math.max(max, right[i + 1]);

            else if (i == n - 1)
                max = Math.max(max, left[n - 2]);

            else
                max = Math.max(max, gcd(left[i - 1], right[i + 1]));
        }

        return max;
    }
}
