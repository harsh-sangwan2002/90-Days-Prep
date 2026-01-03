// TC -> O(N)
// SC -> O(1)
public class SumOfXor {

    private static boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public static int solve(int[] A) {

        int n = A.length;
        long ans = 0L, mod = (long) (1e9 + 7);

        for (int i = 0; i < 32; i++) {
            int zc = 0, oc = 0;

            for (int j = 0; j < n; j++) {

                if (checkBit(A[j], i))
                    oc++;

                else
                    zc++;
            }

            System.out.print("Zero Count: " + zc + " Ones count: " + oc + " ans -> ");
            ans = (ans + oc * 1L * zc * (1 << i)) % mod;
            System.out.println(ans);
        }

        return (int) ans;
    }

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3 };
        int res = solve(arr);
        System.out.println(res);
    }
}
