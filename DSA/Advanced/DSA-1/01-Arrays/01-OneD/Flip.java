// TC -> O(N)
// SC -> O(1)
public class Flip {

    public int[] flip(String A) {

        int n = A.length(), l = 0, r = 0, currSum = 0, maxSum = 0;
        int[] res = new int[2];

        for (int i = 0; i < n; i++) {

            char ch = A.charAt(i);

            if (ch == '0')
                currSum++;

            else
                currSum--;

            if (currSum > maxSum) {
                res[0] = l + 1;
                res[1] = r + 1;
                maxSum = currSum;
            }

            if (currSum < 0) {
                l = i + 1;
                r = i + 1;
                currSum = 0;
            }

            else
                r++;
        }

        if (res[0] == 0)
            return new int[] {};

        return res;
    }
}
