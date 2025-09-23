import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

// TC -> O(N)
// SC -> O(N)
public class ZigZagLevelOrder {

    public int[][] zigzagLevelOrder(TreeNode A) {

        Queue<TreeNode> q = new ArrayDeque<>();
        q.add(A);
        List<List<Integer>> list = new ArrayList<>();
        int lvl = 0;

        while (q.size() != 0) {

            List<Integer> temp = new ArrayList<>();
            int n = q.size();

            while (n-- > 0) {

                TreeNode node = q.remove();

                if (lvl % 2 == 0)
                    temp.add(node.val);

                else
                    temp.add(0, node.val);

                if (node.left != null)
                    q.add(node.left);

                if (node.right != null)
                    q.add(node.right);
            }

            lvl++;
            list.add(temp);
        }

        int[][] res = new int[list.size()][];
        int idx = 0;

        for (List<Integer> temp : list) {

            int[] arr = new int[temp.size()];
            int idx2 = 0;

            for (int val : temp)
                arr[idx2++] = val;

            res[idx++] = arr;
        }

        return res;
    }
}
