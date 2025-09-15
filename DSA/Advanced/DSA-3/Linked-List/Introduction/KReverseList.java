// TC -> O(N)
// SC -> O(1)
public class KReverseList {

    private ListNode reverse(ListNode node) {

        if (node == null || node.next == null)
            return node;

        ListNode prev = null, curr = node;

        while (curr != null) {

            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public ListNode reverseList(ListNode A, int B) {

        if (A == null || A.next == null)
            return A;

        ListNode node = A;
        for (int i = 1; i < B; i++)
            node = node.next;

        ListNode h2 = reverseList(node.next, B);
        node.next = null;
        ListNode h1 = reverse(A);

        A.next = h2;
        return h1;
    }
}
