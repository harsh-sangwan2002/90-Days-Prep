import java.util.HashMap;

public class HashMapIntro {

    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();

        map.put("Delhi", 10);
        map.put("UP", 20);
        map.put("Punjab", 15);
        System.out.println(map);

        // Contains
        System.out.println(map.containsKey("Delhi"));

        // Size
        System.out.println(map.size());

        // Remove
        map.remove("Delhi");
        System.out.println(map);

        for (String str : map.keySet()) {
            System.out.println(str + " -> " + map.get(str));
        }
    }
}
