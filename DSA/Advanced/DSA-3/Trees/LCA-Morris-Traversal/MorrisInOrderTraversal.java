import java.util.ArrayList;
import java.util.List;

// TC -> O(N)
// SC -> O(1)
public class MorrisInOrderTraversal {

    public int[] solve(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        TreeNode curr = A;

        while (curr != null) {

            if (curr.left == null) {
                list.add(curr.val);
                curr = curr.right;
            }

            else {

                TreeNode temp = curr.left;

                while (temp.right != null && temp.right != curr)
                    temp = temp.right;

                if (temp.right == null) {
                    temp.right = curr;
                    curr = curr.left;
                }

                else {
                    temp.right = null;
                    list.add(curr.val);
                    curr = curr.right;
                }
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
