// TC -> O(log N)
// SC -> O(1)

public class HelpFromSam {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int help = 0;

        while (A != 0) {

            if (checkBit(A))
                help++;

            A = A >> 1;
        }

        return help;
    }
}
