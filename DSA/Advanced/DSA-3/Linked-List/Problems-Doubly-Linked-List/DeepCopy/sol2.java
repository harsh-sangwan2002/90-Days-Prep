package DeepCopy;

// TC -> O(N)
// SC -> O(1)
public class sol2 {

    public RandomListNode copyRandomList(RandomListNode head) {

        if (head == null)
            return head;

        RandomListNode curr = head;

        while (curr != null) {

            RandomListNode node = new RandomListNode(curr.label);
            node.next = curr.next;
            curr.next = node;

            curr = curr.next.next;
        }

        curr = head;

        while (curr != null) {

            if (curr.next != null && curr.random != null)
                curr.next.random = curr.random.next;

            curr = curr.next.next;
        }

        curr = head;
        RandomListNode copiedHead = curr.next;
        RandomListNode currCopied = copiedHead;

        while (curr != null) {

            curr.next = curr.next.next;

            if (copiedHead.next != null)
                copiedHead.next = copiedHead.next.next;

            curr = curr.next;
            copiedHead = copiedHead.next;
        }

        return currCopied;
    }
}
