// TC -> O(N)
// SC -> O(N)
public class SimpleReverse {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();
        int n = A.length();

        for (int i = n - 1; i >= 0; i--) {

            char ch = A.charAt(i);
            sb.append(ch);
        }

        return sb.toString();
    }
}
