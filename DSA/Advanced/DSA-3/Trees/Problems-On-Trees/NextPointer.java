// TC -> O(N)
// SC -> O(1)
public class NextPointer {

    public void connect(TreeLinkNode root) {

        if (root == null)
            return;

        TreeLinkNode node = root;

        while (node.left != null) {
            TreeLinkNode s = node;

            while (node != null) {
                node.left.next = node.right;

                if (node.next != null)
                    node.right.next = node.next.left;

                node = node.next;
            }

            node = s.left;
        }
    }
}
