import java.util.ArrayList;
import java.util.Collections;

// TC -> O(N logN)
// SC -> O(1)
public class FactorsSort {

    private int factors(int n) {

        if (n == 1)
            return 1;

        int count = 2;

        for (int i = 2; i <= Math.sqrt(n); i++) {

            if (n % i == 0) {

                if (i * i == n)
                    count++;

                else
                    count += 2;
            }
        }

        return count;
    }

    public ArrayList<Integer> solve(ArrayList<Integer> A) {

        Collections.sort(A, (a, b) -> {

            int n1 = factors(a), n2 = factors(b);

            if (n1 < n2)
                return -1;

            else if (n1 > n2)
                return 1;

            else
                return a - b;
        });

        return A;
    }
}
