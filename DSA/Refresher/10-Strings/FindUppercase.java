public class FindUppercase {

    public static void main(String[] args) {

        String str = "IndIA";
        int uppercaseChars = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (ch >= 'A' && ch <= 'Z')
                uppercaseChars++;
        }

        System.out.println(uppercaseChars);
    }
}
