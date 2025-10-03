import java.util.Arrays;

// TC -> O(N logN)
// SC -> O(N)
public class MaxJobs {

    private class Pair {

        int st;
        int et;

        public Pair(int st, int et) {
            this.st = st;
            this.et = et;
        }
    }

    public int solve(int[] A, int[] B) {

        int n = A.length;
        Pair[] pairs = new Pair[n];

        for (int i = 0; i < n; i++)
            pairs[i] = new Pair(A[i], B[i]);

        Arrays.sort(pairs, (p1, p2) -> p1.et - p2.et);

        int jobs = 1, prevET = pairs[0].et;

        for (int i = 1; i < n; i++) {

            if (pairs[i].st >= prevET) {
                jobs++;
                prevET = pairs[i].et;
            }
        }

        return jobs;
    }
}
