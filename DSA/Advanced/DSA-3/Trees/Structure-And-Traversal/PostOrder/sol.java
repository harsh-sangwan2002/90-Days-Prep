package PostOrder;

import java.util.ArrayList;
import java.util.List;

// TC -> O(N)
// SC -> O(H)
public class sol {

    private void helper(TreeNode node, List<Integer> list) {

        if (node == null)
            return;

        helper(node.left, list);
        helper(node.right, list);
        list.add(node.val);
    }

    public int[] postorderTraversal(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        helper(A, list);

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
