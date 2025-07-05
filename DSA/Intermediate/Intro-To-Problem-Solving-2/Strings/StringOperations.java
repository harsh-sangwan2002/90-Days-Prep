// TC -> O(N)
// SC -> O(N)
public class StringOperations {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder(A);
        sb.append(A);
        StringBuilder res = new StringBuilder();

        for (int i = 0; i < sb.length(); i++) {

            char ch = sb.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                res.append('#');

            else if (ch >= 'A' && ch <= 'Z')
                continue;

            else
                res.append(ch);
        }

        return res.toString();
    }
}
