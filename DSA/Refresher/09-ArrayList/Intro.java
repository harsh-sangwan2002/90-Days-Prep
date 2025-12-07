import java.util.ArrayList;

public class Intro {

    public static void main(String[] args) {

        ArrayList<Integer> arr = new ArrayList<>();

        // add
        arr.add(5);
        arr.add(-1);
        arr.add(2);
        System.out.println(arr);

        // get
        System.out.println("1st element-> " + arr.get(0));
        System.out.println("2nd element-> " + arr.get(1));
        System.out.println("3rd element-> " + arr.get(2));
        // System.out.println(arr.get(3)); // IndexOutOfBound

        // size
        System.out.println(arr.size());

        // remove
        System.out.println(arr.remove(0));
        System.out.println(arr);

        // set
        arr.set(0, -100);
        System.out.println(arr);

        // add
        arr.add(0, 120);
        System.out.println(arr);

        // clear
        // arr.clear();
        // System.out.println(arr);
    }
}