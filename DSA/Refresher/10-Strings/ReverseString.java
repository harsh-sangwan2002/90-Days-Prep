public class ReverseString {

    public static void main(String[] args) {

        String str = "India", reversed = "";

        for (int i = 0; i < str.length(); i++) {

            char ch = str.charAt(i);
            reversed = ch + reversed;
        }

        System.out.println(reversed);
    }
}
