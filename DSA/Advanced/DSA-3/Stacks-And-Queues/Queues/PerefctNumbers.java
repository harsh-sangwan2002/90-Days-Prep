import java.util.ArrayDeque;
import java.util.Queue;

// TC -> O(2^N)
// SC -> O(N)
public class PerefctNumbers {

    public String solve(int A) {

        Queue<String> q = new ArrayDeque<>();
        q.add("1");
        q.add("2");
        int count = 2;
        StringBuilder sb = new StringBuilder();

        for (int k = 1; k <= A; k++) {

            String str = q.remove();
            StringBuilder temp = new StringBuilder(str);
            StringBuilder curr = new StringBuilder(temp);
            curr.append(temp.reverse());
            sb = curr;

            for (int i = 1; i <= 2; i++) {

                if (count < A) {
                    q.add(str + i);
                }

                else
                    break;
            }
        }

        return sb.toString();
    }
}
