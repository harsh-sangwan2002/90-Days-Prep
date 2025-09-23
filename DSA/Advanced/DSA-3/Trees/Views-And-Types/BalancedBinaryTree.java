// TC -> O(N)
// SC -> O(H)
public class BalancedBinaryTree {

    private class Pair {

        int height;
        boolean isBalanced;

        public Pair(int height, boolean isBalanced) {
            this.height = height;
            this.isBalanced = isBalanced;
        }
    }

    private Pair helper(TreeNode node) {

        if (node == null)
            return new Pair(0, true);

        Pair lp = helper(node.left);
        Pair rp = helper(node.right);
        boolean balanced = lp.isBalanced && rp.isBalanced && (Math.abs(lp.height - rp.height) <= 1);
        int height = Math.max(lp.height, rp.height) + 1;

        return new Pair(height, balanced);
    }

    public int isBalanced(TreeNode A) {

        return helper(A).isBalanced ? 1 : 0;
    }
}
