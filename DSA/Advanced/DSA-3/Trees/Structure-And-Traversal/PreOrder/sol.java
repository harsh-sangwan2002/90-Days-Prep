import java.util.ArrayList;
import java.util.List;

// TC -> O(N)
// SC -> O(H)
public class sol {

    private void helper(TreeNode node, List<Integer> list) {

        if (node == null)
            return;

        list.add(node.val);
        helper(node.left, list);
        helper(node.right, list);
    }

    public int[] preorderTraversal(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        helper(A, list);

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
