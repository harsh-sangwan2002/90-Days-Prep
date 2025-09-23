import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Queue;

// TC -> O(N)
// SC -> O(N)
public class TopView {

    private class Pair {

        TreeNode node;
        int lvl;

        public Pair(TreeNode node, int lvl) {
            this.node = node;
            this.lvl = lvl;
        }
    }

    public int[] solve(TreeNode A) {

        HashMap<Integer, List<Integer>> map = new HashMap<>();
        Queue<Pair> q = new ArrayDeque<>();
        q.add(new Pair(A, 0));

        int minL = Integer.MAX_VALUE, maxL = Integer.MIN_VALUE;

        while (q.size() != 0) {

            Pair pair = q.remove();

            if (map.containsKey(pair.lvl)) {
                List<Integer> list = map.get(pair.lvl);
                list.add(pair.node.val);
            }

            else {
                List<Integer> list = new ArrayList<>();
                list.add(pair.node.val);
                map.put(pair.lvl, list);
            }

            minL = Math.min(minL, pair.lvl);
            maxL = Math.max(maxL, pair.lvl);

            if (pair.node.left != null)
                q.add(new Pair(pair.node.left, pair.lvl - 1));

            if (pair.node.right != null)
                q.add(new Pair(pair.node.right, pair.lvl + 1));
        }

        int[] res = new int[map.size()];
        int idx = 0;

        for (int i = minL; i <= maxL; i++) {

            List<Integer> list = map.get(i);
            res[idx++] = list.get(0);
        }

        return res;
    }
}
