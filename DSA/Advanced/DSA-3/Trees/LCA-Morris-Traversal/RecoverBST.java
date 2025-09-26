// TC -> O(N)
// SC -> O(H)
public class RecoverBST {

    private TreeNode p1, p2, prev;

    private void solve(TreeNode node) {

        if (node == null)
            return;

        solve(node.left);

        if (prev != null && prev.val > node.val) {

            if (p1 == null) {
                p1 = prev;
                p2 = node;
            }

            else
                p2 = node;
        }

        prev = node;

        solve(node.right);
    }

    public int[] recoverTree(TreeNode A) {

        p1 = null;
        p2 = null;
        prev = null;
        solve(A);

        return new int[] { p2.val, p1.val };
    }
}
