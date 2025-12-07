import java.util.HashSet;

public class HashSetIntro {

    public static void main(String[] args) {

        HashSet<Integer> set = new HashSet<>();

        // Adding elements
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(null);
        // System.out.println(set);

        // Size
        // System.out.println(set.size());

        // // Element is present or not
        // System.out.println(set.contains(2));

        // // Removing the elements
        // set.remove(3);
        // System.out.println(set);

        // ArrayList -> Sequential Order and duplicates are allowed
        // HashSet -> Random order and duplicates are not allowed

        for (Integer val : set) {
            System.out.println(val);
        }
    }
}