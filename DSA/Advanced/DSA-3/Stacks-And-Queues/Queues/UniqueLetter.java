import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Queue;

// TC -> O(N^2)
// SC -> O(N)
public class UniqueLetter {

    public String solve(String A) {

        HashMap<Character, Integer> map = new HashMap<>();
        Queue<Character> q = new ArrayDeque<>();
        String str = "";

        for (char ch : A.toCharArray()) {

            q.add(ch);
            map.put(ch, map.getOrDefault(ch, 0) + 1);

            while (q.size() != 0 && map.get(q.peek()) > 1)
                q.remove();

            if (q.size() == 0)
                str += '#';

            else
                str += q.peek();
        }

        return str;
    }
}
