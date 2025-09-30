import java.util.HashSet;
import java.util.Set;

// TC -> O(N)
// SC -> O(N)
public class LongestSubstringWithoutRepeat {

    public int lengthOfLongestSubstring(String A) {

        if (A.length() == 0 || A == null)
            return 0;

        Set<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;

        for (int right = 0; right < A.length(); right++) {

            char curr = A.charAt(right);

            while (set.contains(curr)) {
                set.remove(A.charAt(left));
                left++;
            }

            set.add(curr);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
