import java.util.ArrayList;
import java.util.Collections;

// TC -> O(N logN)
// SC -> O(1)
public class BClosestPoint {

    private int distance(int x, int y) {

        return x * x + y * y;
    }

    public ArrayList<ArrayList<Integer>> solve(ArrayList<ArrayList<Integer>> A, int B) {

        Collections.sort(A, (l1, l2) -> {

            return distance(l1.get(0), l1.get(1)) - distance(l2.get(0), l2.get(1));
        });

        ArrayList<ArrayList<Integer>> res = new ArrayList<>();

        for (int i = 0; i < B; i++)
            res.add(A.get(i));

        return res;
    }
}
