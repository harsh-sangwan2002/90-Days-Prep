import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// TC -> O(N*N!)
// SC -> O(N*N!)
public class UniquePermutations {

    private void helper(int[] A, List<Integer> curr, List<List<Integer>> res, boolean[] vis) {

        if (curr.size() == A.length) {
            res.add(new ArrayList<>(curr));
            return;
        }

        for (int i = 0; i < A.length; i++) {

            if (vis[i] || (i > 0 && A[i] == A[i - 1] && !vis[i - 1]))
                continue;

            curr.add(A[i]);
            vis[i] = true;
            helper(A, curr, res, vis);
            vis[i] = false;
            curr.remove(curr.size() - 1);
        }
    }

    public int[][] permute(int[] A) {

        Arrays.sort(A);

        int n = A.length;
        boolean[] vis = new boolean[n];
        List<List<Integer>> res = new ArrayList<>();

        helper(A, new ArrayList<>(), res, vis);

        int[][] ans = new int[res.size()][];
        int idx1 = 0;

        for (List<Integer> list : res) {

            int[] temp = new int[list.size()];
            int idx2 = 0;

            for (int val : list)
                temp[idx2++] = val;

            ans[idx1++] = temp;
        }

        return ans;
    }
}
