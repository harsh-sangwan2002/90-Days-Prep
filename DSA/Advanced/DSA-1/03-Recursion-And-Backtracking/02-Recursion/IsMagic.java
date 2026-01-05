// TC ->
public class IsMagic {

    public int solve(int A) {

        if (A == 1)
            return 1;
        if (A / 10 == 0)
            return 0;

        int sum = 0;
        while (A != 0) {
            int ld = A % 10;
            sum += ld;
            A /= 10;
        }

        if (sum / 10 == 0 && sum == 1)
            return 1;

        return solve(sum);
    }
}
