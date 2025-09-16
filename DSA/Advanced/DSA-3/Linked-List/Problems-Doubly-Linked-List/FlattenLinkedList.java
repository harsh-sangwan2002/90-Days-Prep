// TC -> O(N*M)
// SC -> O(1)
public class FlattenLinkedList {

    private ListNode merge(ListNode A, ListNode B) {

        if (A == null)
            return B;
        if (B == null)
            return A;

        ListNode head = null, tail = null;
        ListNode h1 = A, h2 = B;

        if (h1.val < h2.val) {
            head = h1;
            tail = h1;
            h1 = h1.down;
        }

        else {
            head = h2;
            tail = h2;
            h2 = h2.down;
        }

        while (h1 != null && h2 != null) {

            if (h1.val < h2.val) {
                tail.down = h1;
                h1 = h1.down;
            }

            else {
                tail.down = h2;
                h2 = h2.down;
            }

            tail = tail.down;
        }

        if (h1 == null)
            tail.down = h2;
        if (h2 == null)
            tail.down = h1;

        return head;
    }

    ListNode flatten(ListNode root) {

        if (root == null || root.right == null)
            return root;

        ListNode h1 = flatten(root.right);
        ListNode h2 = flatten(root.down);

        root.down = merge(h1, h2);
        return root;
    }
}