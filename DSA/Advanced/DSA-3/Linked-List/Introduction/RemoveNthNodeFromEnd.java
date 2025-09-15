// TC -> O(N)
// SC -> O(1)
public class RemoveNthNodeFromEnd {

    public ListNode removeNthFromEnd(ListNode A, int B) {

        ListNode slow = A, fast = A;

        for (int i = 0; i <= B && fast != null; i++)
            fast = fast.next;

        if (fast == null)
            return A.next;

        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return A;
    }
}
