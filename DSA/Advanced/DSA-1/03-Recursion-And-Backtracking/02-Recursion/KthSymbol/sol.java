package KthSymbol;

import java.util.ArrayList;
import java.util.List;

// TC -> O(2^A)
// SC -> O(2^A)
public class sol {

    public int solve(int A, int B) {

        List<StringBuilder> res = new ArrayList<>();
        res.add(new StringBuilder("0"));

        for (int i = 1; i < A; i++) {

            StringBuilder sb = res.get(i - 1);
            StringBuilder temp = new StringBuilder();

            for (int j = 0; j < sb.length(); j++) {

                char ch = sb.charAt(j);

                if (ch == '0')
                    temp.append("01");

                else
                    temp.append("10");
            }

            res.add(temp);
        }

        return res.get(A - 1).charAt(B) == '1' ? 1 : 0;
    }
}
