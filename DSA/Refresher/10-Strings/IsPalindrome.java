public class IsPalindrome {

    public static void main(String[] args) {

        String str = "Nitin";
        int lo = 0, hi = str.length() - 1;

        while (lo < hi) {
            char first = str.charAt(lo), last = str.charAt(hi);

            if (first != last) {
                System.out.println("String is not a palindrome");
                System.exit(0);
            }

            lo++;
            hi--;
        }

        System.out.println("String is a palindrome");
    }
}
