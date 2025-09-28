// TC -> O(N)
// SC -> O(H)
public class SumBinaryTree {

    private class Pair {

        int sum;
        boolean flag;

        public Pair(int sum, boolean flag) {
            this.sum = sum;
            this.flag = flag;
        }
    }

    private Pair check(TreeNode node) {

        if (node == null)
            return new Pair(0, true);

        else if (node.left == null && node.right == null)
            return new Pair(node.val, true);

        Pair lp = check(node.left);
        Pair rp = check(node.right);
        boolean flag = lp.flag && rp.flag && node.val == (lp.sum + rp.sum);

        return new Pair(lp.sum + rp.sum + node.val, flag);
    }

    public int solve(TreeNode A) {

        return check(A).flag ? 1 : 0;
    }
}
