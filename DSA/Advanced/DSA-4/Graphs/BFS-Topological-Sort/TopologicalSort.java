import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

// TC -> O(V + E)
// SC -> O(V + E)
public class TopologicalSort {

    public int[] solve(int A, int[][] B) {

        List<Integer>[] graph = new ArrayList[A + 1];
        int[] indegree = new int[A + 1];
        Queue<Integer> q = new PriorityQueue<>();

        int[] res = new int[A];
        int idx = 0;

        for (int i = 0; i < graph.length; i++)
            graph[i] = new ArrayList<>();

        for (int i = 0; i < B.length; i++) {
            int u = B[i][0], v = B[i][1];
            graph[u].add(v);
            indegree[v]++;
        }

        for (int i = 1; i <= A; i++) {
            if (indegree[i] == 0)
                q.add(i);
        }

        while (q.size() != 0) {
            int v = q.remove();
            res[idx++] = v;

            for (int neigh : graph[v]) {
                indegree[neigh]--;
                if (indegree[neigh] == 0)
                    q.add(neigh);
            }
        }

        if (idx != A) {
            return new int[0];
        }

        return res;
    }
}
