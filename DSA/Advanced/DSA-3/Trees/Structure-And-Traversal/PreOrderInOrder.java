// TC -> O(N^2) 
// SC -> O(log N)
public class PreOrderInOrder {

    private int findRoot(int[] arr, int is, int ie, int tar) {

        for (int i = is; i <= ie; i++) {

            if (arr[i] == tar)
                return i;
        }

        return -1;
    }

    private TreeNode helper(int[] pre, int ps, int pe, int[] in, int is, int ie) {

        if (is > ie || ps > pe)
            return null;

        TreeNode root = new TreeNode(pre[ps]);
        int rootIdx = findRoot(in, is, ie, root.val);
        int ele = rootIdx - is;

        root.left = helper(pre, ps + 1, ps + ele, in, is, rootIdx - 1);
        root.right = helper(pre, ps + ele + 1, pe, in, rootIdx + 1, ie);
        return root;
    }

    public TreeNode buildTree(int[] A, int[] B) {

        return helper(A, 0, A.length - 1, B, 0, B.length - 1);
    }
}
