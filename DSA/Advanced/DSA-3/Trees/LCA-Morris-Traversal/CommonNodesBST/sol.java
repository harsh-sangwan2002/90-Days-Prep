import java.util.ArrayList;
import java.util.List;

// TC -> O(N + M)
// SC -> O(N)
public class sol {

    private void fillList(TreeNode node, List<Integer> list) {

        if (node == null)
            return;

        fillList(node.left, list);
        list.add(node.val);
        fillList(node.right, list);
    }

    private boolean find(TreeNode node, int val) {

        if (node == null)
            return false;

        if (node.val == val)
            return true;

        else if (node.val > val)
            return find(node.left, val);

        else
            return find(node.right, val);
    }

    public int solve(TreeNode A, TreeNode B) {

        List<Integer> list = new ArrayList<>();
        fillList(A, list);

        long sum = 0L, mod = (long) (1e9 + 7);

        for (int i = 0; i < list.size(); i++) {

            int val = list.get(i);

            if (find(B, val))
                sum = (sum + val) % mod;
        }

        return (int) sum;
    }
}
