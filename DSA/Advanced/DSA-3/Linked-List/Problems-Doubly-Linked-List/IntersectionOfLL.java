// TC -> O(N+M)
// SC -> O(1)
public class IntersectionOfLL {

    private int size(ListNode A) {

        if (A == null)
            return 0;

        int count = 0;
        ListNode temp = A;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        return count;
    }

    public ListNode getIntersectionNode(ListNode A, ListNode B) {

        int s1 = size(A);
        int s2 = size(B);
        int delta = Math.abs(s1 - s2);

        ListNode h1 = A, h2 = B;

        if (s1 > s2) {

            for (int i = 1; i <= delta; i++)
                h1 = h1.next;
        }

        else {

            for (int i = 1; i <= delta; i++)
                h2 = h2.next;
        }

        while (h1 != h2) {
            h1 = h1.next;
            h2 = h2.next;
        }

        return h1;
    }
}