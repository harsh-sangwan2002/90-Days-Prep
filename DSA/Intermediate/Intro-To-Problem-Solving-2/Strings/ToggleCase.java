// TC -> O(N)
// SC -> O(N)
public class ToggleCase {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();
        int n = A.length();

        for(int i=0; i<n; i++){

            char ch = A.charAt(i);

            if(ch>='A' && ch<='Z')
            sb.append((char)(ch+32));

            else 
            sb.append((char)(ch-32));
        }

        return sb.toString();
    }
}
