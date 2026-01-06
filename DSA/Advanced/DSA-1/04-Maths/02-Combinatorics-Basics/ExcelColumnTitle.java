// TC -> O(log N)
// SC -> O(N)
public class ExcelColumnTitle {

    public String convertToTitle(int A) {

        String str = "";

        while (A != 0) {
            int ld = (A - 1) % 26;
            A = (A - 1) / 26;
            str = (char) ('A' + ld) + str;
        }

        return str;
    }
}
