public class Swap {

    public static void main(String[] args) {

        int x = 25, y = 38;

        // int temp = x;
        // x = y;
        // y = temp;

        x = x + y;
        y = x - y;
        x = x - y;

        System.out.println(x + " " + y);
    }
}
