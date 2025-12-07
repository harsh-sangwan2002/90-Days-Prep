public class SpecialCharacters {

    public static void main(String[] args) {

        String str = "ab12@#&123";
        int specialChars = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
                continue;

            else
                specialChars++;
        }

        System.out.println(specialChars);
    }
}
