import java.util.HashSet;

public class PrintCommonElements {

    public static void printCommonElements(HashSet<Integer> set1, HashSet<Integer> set2) {

        for (Integer val : set1) {
            if (set2.contains(val))
                System.out.println(val);
        }
    }

    public static void main(String[] args) {

        HashSet<Integer> set1 = new HashSet<>();
        HashSet<Integer> set2 = new HashSet<>();
        set1.add(1);
        set1.add(2);
        set1.add(3);

        set2.add(3);
        set2.add(4);
        set2.add(5);

        printCommonElements(set1, set2);
    }
}
