// TC -> O(N^2)
// SC -> O(N)
public class InOrderPostOrder {

    private int findRoot(int[] arr, int is, int ie, int tar) {

        for (int i = is; i <= ie; i++) {

            if (arr[i] == tar)
                return i;
        }

        return -1;
    }

    private TreeNode helper(int[] in, int is, int ie, int[] post, int ps, int pe) {

        if (is > ie || ps > pe)
            return null;

        TreeNode root = new TreeNode(post[pe]);
        int rootIdx = findRoot(in, is, ie, root.val);
        int ele = rootIdx - is;

        root.left = helper(in, is, rootIdx - 1, post, ps, ps + ele - 1);
        root.right = helper(in, rootIdx + 1, ie, post, ps + ele, pe - 1);
        return root;
    }

    public TreeNode buildTree(int[] A, int[] B) {

        return helper(A, 0, A.length - 1, B, 0, B.length - 1);
    }
}
