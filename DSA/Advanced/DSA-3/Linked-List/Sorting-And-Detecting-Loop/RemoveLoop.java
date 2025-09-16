// TC -> O(N)
// SC -> O(1)
public class RemoveLoop {

    public ListNode solve(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode slow = A, fast = A;
        boolean flag = false;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                flag = true;
                break;
            }
        }

        if (!flag)
            return A;

        slow = A;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        ListNode temp = slow;
        while (temp.next != slow)
            temp = temp.next;

        temp.next = null;
        return A;
    }
}
