import java.util.Arrays;

// TC -> O(N log N)
// SC -> O(1)
public class MiceHoles {

    public int mice(int[] A, int[] B) {

        int n = A.length;
        Arrays.sort(A);
        Arrays.sort(B);

        int time = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++)
            time = Math.max(time, Math.abs(A[i] - B[i]));

        return time;
    }
}
