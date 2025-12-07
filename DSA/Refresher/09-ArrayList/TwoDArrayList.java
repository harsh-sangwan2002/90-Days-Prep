import java.util.ArrayList;

public class TwoDArrayList {

    public static void main(String[] args) {

        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
        ArrayList<Integer> arr1 = new ArrayList<>();
        arr1.add(1);
        arr1.add(2);

        ArrayList<Integer> arr2 = new ArrayList<>();
        arr2.add(10);
        arr2.add(20);

        arr.add(arr1);
        arr.add(arr2);
        System.out.println(arr);
    }
}
