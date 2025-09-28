// TC -> O(H)
// SC -> O(H)
public class DistanceBetween2NodesInBST {

    private TreeNode LCA(TreeNode A, int B, int C) {

        if (A == null)
            return null;

        if (A.val < B && A.val < C)
            return LCA(A.right, B, C);

        else if (A.val > B && A.val > C)
            return LCA(A.left, B, C);

        else
            return A;
    }

    private int distance(TreeNode A, int B) {

        if (A == null || A.val == B)
            return 0;

        else if (A.val > B)
            return 1 + distance(A.left, B);

        else
            return 1 + distance(A.right, B);
    }

    public int solve(TreeNode A, int B, int C) {

        TreeNode lca = LCA(A, B, C);
        return distance(lca, B) + distance(lca, C);
    }
}
