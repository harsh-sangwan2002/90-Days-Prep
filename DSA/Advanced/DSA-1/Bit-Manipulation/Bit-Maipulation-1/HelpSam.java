// TC -> O(1)
// SC -> O(1)
public class HelpSam {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int help = 0;

        for (int i = 0; i < 32; i++) {

            if (checkBit(A))
                help++;

            A = A >> 1;
        }

        return help;
    }
}
