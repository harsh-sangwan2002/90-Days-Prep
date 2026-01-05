import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// TC -> O(N*2^N)
// SC -> O(N*2^N)
public class Subsets {

    private void helper(int[] A, int idx, List<Integer> list, List<List<Integer>> res) {

        res.add(new ArrayList<>(list));

        for (int i = idx; i < A.length; i++) {
            list.add(A[i]);
            helper(A, i + 1, list, res);
            list.remove(list.size() - 1);
        }
    }

    public int[][] subsets(int[] A) {

        Arrays.sort(A);
        List<List<Integer>> res = new ArrayList<>();

        helper(A, 0, new ArrayList<>(), res);

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
