import java.util.ArrayList;
import java.util.List;

// TC -> O(2^N)
// SC -> O(2^N)
public class KthSymbolEasy {

    public int solve(int A, int B) {

        List<String> res = new ArrayList<>();
        res.add("0");

        for (int i = 1; i <= A; i++) {

            String str = res.get(i - 1);
            String temp = "";

            for (int j = 0; j < str.length(); j++) {

                if (str.charAt(j) == '0')
                    temp += "01";

                else
                    temp += "10";
            }

            res.add(temp);
        }

        String val = res.get(A - 1).charAt(B) + "";
        return Integer.parseInt(val);
    }
}
