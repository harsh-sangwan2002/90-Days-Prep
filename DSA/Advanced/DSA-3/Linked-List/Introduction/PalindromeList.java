// TC -> O(N)
// SC -> O(1)
public class PalindromeList {

    private ListNode findMid(ListNode node) {

        if (node == null)
            return null;

        ListNode slow = node, fast = node;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    private ListNode reverse(ListNode node) {

        ListNode prev = null, curr = node;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public int lPalin(ListNode A) {

        ListNode mid = findMid(A);
        ListNode head = mid.next;
        mid.next = null;

        head = reverse(head);
        ListNode l1 = A, l2 = head;

        while (l1 != null && l2 != null) {

            if (l1.val != l2.val)
                return 0;

            l1 = l1.next;
            l2 = l2.next;
        }

        return 1;
    }
}
