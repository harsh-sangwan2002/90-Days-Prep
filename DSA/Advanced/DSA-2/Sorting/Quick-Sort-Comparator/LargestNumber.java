import java.util.ArrayList;
import java.util.Collections;

// TC -> O(N logN)
// SC -> O(1)
public class LargestNumber {

    public String largestNumber(ArrayList<Integer> A) {

        Collections.sort(A, (a, b) -> {

            String s1 = a + "" + b;
            String s2 = b + "" + a;
            return s2.compareTo(s1);
        });

        StringBuilder sb = new StringBuilder();

        for (int val : A)
            sb.append(val + "");

        if (sb.charAt(0) == '0')
            return "0";

        return sb.toString();
    }
}
