import java.util.ArrayList;
import java.util.List;

// TC -> O(V + E)
// SC -> O(V)
public class CycleDetection {

    private boolean dfs(List<Integer>[] graph, int u, boolean[] vis, boolean[] st) {

        vis[u] = true;

        for (int neigh : graph[u]) {

            if (st[neigh])
                return true;

            if (!vis[neigh]) {

                st[neigh] = true;

                boolean flag = dfs(graph, neigh, vis, st);
                if (flag)
                    return true;

                st[neigh] = false;
            }
        }

        return false;
    }

    public int solve(int A, int[][] B) {

        List<Integer>[] graph = new ArrayList[A + 1];

        for (int i = 0; i <= A; i++)
            graph[i] = new ArrayList<>();

        for (int i = 0; i < B.length; i++) {
            int u = B[i][0], v = B[i][1];
            graph[u].add(v);
        }

        boolean[] vis = new boolean[A + 1];
        boolean[] st = new boolean[A + 1];
        st[1] = true;

        for (int i = 1; i <= A; i++) {

            boolean flag = dfs(graph, i, vis, st);

            if (flag)
                return 1;
        }

        return 0;
    }
}
