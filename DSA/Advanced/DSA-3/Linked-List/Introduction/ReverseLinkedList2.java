// TC -> O(N)
// SC -> O(1)
public class ReverseLinkedList2 {

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

    public ListNode reverseBetween(ListNode A, int B, int C) {

        if (A == null || A.next == null || B >= C)
            return A;

        ListNode first = null, last = null, from = null, to = null;
        ListNode curr = A, head = A;
        int count = 0;

        while (curr != null) {

            count++;

            if (count < B)
                first = curr;

            else if (count == B)
                from = curr;

            else if (count == C) {
                to = curr;
                last = to.next;
                to.next = null;
                break;
            }

            curr = curr.next;
        }

        ListNode h2 = reverse(from);

        if (first == null)
            head = h2;

        else
            first.next = h2;

        from.next = last;

        return head;
    }
}
