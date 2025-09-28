// TC -> O(N)
// SC -> O(H)
public class Diameter {

    private int dia;

    private int height(TreeNode node) {

        if (node == null)
            return -1;

        int lh = height(node.left);
        int rh = height(node.right);

        dia = Math.max(dia, lh + rh + 2);
        return Math.max(lh, rh) + 1;
    }

    public int solve(TreeNode A) {

        dia = 0;
        height(A);

        return dia;
    }
}
