package InOrder;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// TC -> O(N)
// SC -> O(H)
public class sol2 {

    private class Pair {

        TreeNode node;
        int lvl;

        public Pair(TreeNode node, int lvl) {
            this.node = node;
            this.lvl = lvl;
        }
    }

    public int[] inorderTraversal(TreeNode A) {

        Stack<Pair> st = new Stack<>();
        st.push(new Pair(A, 1));
        List<Integer> list = new ArrayList<>();

        while (st.size() != 0) {

            Pair top = st.peek();

            if (top.lvl == 1) {
                top.lvl++;

                if (top.node.left != null)
                    st.push(new Pair(top.node.left, 1));
            }

            else if (top.lvl == 2) {
                list.add(top.node.val);
                top.lvl++;

                if (top.node.right != null)
                    st.push(new Pair(top.node.right, 1));
            }

            else
                st.pop();
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
