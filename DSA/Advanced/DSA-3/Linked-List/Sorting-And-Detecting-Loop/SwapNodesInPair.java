// TC -> O(N)
// SC -> O(N)
public class SwapNodesInPair {

    public ListNode swapPairs(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode next = A.next;
        ListNode h2 = swapPairs(next.next);

        next.next = A;
        A.next = h2;

        return next;
    }
}
