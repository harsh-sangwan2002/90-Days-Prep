// TC -> O(N)
// SC -> O(1)
public class WaterContainer {

    public int maxArea(int[] A) {

        int i = 0, j = A.length - 1, area = 0;

        while (i < j) {

            int width = j - i, min = Math.min(A[i], A[j]);
            int curr = width * min;
            area = Math.max(area, curr);

            if (A[i] < A[j])
                i++;

            else
                j--;
        }

        return area;
    }
}
