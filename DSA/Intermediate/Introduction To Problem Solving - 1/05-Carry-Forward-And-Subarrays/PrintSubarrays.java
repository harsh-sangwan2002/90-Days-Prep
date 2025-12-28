public class PrintSubarrays {

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3, 4 };

        for (int i = 0; i < arr.length; i++) {

            for (int j = i; j < arr.length; j++) {

                System.out.print("[");

                for (int k = i; k <= j; k++) {

                    if (k != j)
                        System.out.print(arr[k] + ", ");

                    else
                        System.out.print(arr[k] + "]");
                }

                System.out.println();
            }
        }
    }
}
