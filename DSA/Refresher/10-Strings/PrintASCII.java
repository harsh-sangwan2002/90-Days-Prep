public class PrintASCII {

    public static void main(String[] args) {

        String str = "ABC";

        for (int i = 0; i < str.length(); i++)
            System.out.println((int) str.charAt(i));
    }
}
