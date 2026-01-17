package ArrayRotation;

// TC -> O(N*B)
// SC -> O(1)
public class sol {

    public int[] solve(int[] A, int B) {

        int n = A.length;
        B = B % A.length;

        for (int k = 0; k < B; k++) {

            int temp = A[n - 1];
            for (int j = n - 1; j >= 1; j--)
                A[j] = A[j - 1];

            A[0] = temp;
        }

        return A;
    }
}
