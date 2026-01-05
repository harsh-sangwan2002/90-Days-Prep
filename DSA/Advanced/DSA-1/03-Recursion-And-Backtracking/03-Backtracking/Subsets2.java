import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// TC -> O(N*2^N)
// SC -> O(N*2^N)
public class Subsets2 {

    private void helper(int[] A, int idx, List<Integer> curr, List<List<Integer>> res) {

        res.add(new ArrayList<>(curr));

        for (int i = idx; i < A.length; i++) {

            if (i > idx && A[i] == A[i - 1])
                continue;

            curr.add(A[i]);
            helper(A, i + 1, curr, res);
            curr.remove(curr.size() - 1);
        }
    }

    public int[][] subsetsWithDup(int[] A) {

        Arrays.sort(A);
        List<List<Integer>> res = new ArrayList<>();

        helper(A, 0, new ArrayList<>(), res);

        int[][] arr = new int[res.size()][];
        int idx1 = 0;

        for (List<Integer> list : res) {

            int[] temp = new int[list.size()];
            int idx2 = 0;

            for (int val : list)
                temp[idx2++] = val;

            arr[idx1++] = temp;
        }

        return arr;
    }
}
