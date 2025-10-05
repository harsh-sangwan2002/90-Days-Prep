import java.util.ArrayList;
import java.util.List;

// TC -> O(V + E)
// SC -> O(V)
public class PathExist {

    private void dfs(List<Integer>[] graph, int u, boolean[] vis) {

        vis[u] = true;

        for (int neigh : graph[u]) {

            if (!vis[neigh])
                dfs(graph, neigh, vis);
        }
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
        dfs(graph, 1, vis);

        return vis[A] ? 1 : 0;
    }
}
