import java.util.ArrayList;
import java.util.List;

// TC -> O(2^N)
// SC -> O(2^N)
public class KthSymbolEasy {

    public int solve(int A, int B) {

        List<String> res = new ArrayList<>();
        res.add("0");

        for (int i = 1; i <= A; i++) {

            String temp = res.get(i - 1);
            String str = "";

            for (int j = 0; j < temp.length(); j++) {

                if (temp.charAt(j) == '0')
                    str += "01";

                else
                    str += "10";
            }

            res.add(str);
        }

        String str = res.get(A - 1).charAt(B) + "";
        return Integer.parseInt(str);
    }
}
