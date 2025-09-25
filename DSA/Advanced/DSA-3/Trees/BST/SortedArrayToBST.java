// TC -> O(N)
// SC -> O(H)
public class SortedArrayToBST {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    private TreeNode solve(int[] A, int lo, int hi) {

        if (lo > hi)
            return null;

        int mid = lo + (hi - lo) / 2;

        TreeNode root = new TreeNode(A[mid]);
        root.left = solve(A, lo, mid - 1);
        root.right = solve(A, mid + 1, hi);

        return root;
    }

    public TreeNode sortedArrayToBST(final int[] A) {

        return solve(A, 0, A.length - 1);
    }
}
