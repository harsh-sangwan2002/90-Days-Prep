// TC -> O(N)
// SC -> O(H)
public class ValidBST {

    private int solve(TreeNode node, int min, int max) {

        if (node == null)
            return 1;

        else if (node.val >= min && node.val <= max) {

            int left = solve(node.left, min, node.val - 1);
            if (left == 0)
                return 0;

            int right = solve(node.right, node.val + 1, max);
            if (right == 0)
                return 0;

            return 1;
        }

        else
            return 0;
    }

    public int isValidBST(TreeNode A) {

        return solve(A, 0, Integer.MAX_VALUE);
    }
}
