import java.util.ArrayList;
import java.util.Collections;

// TC -> O(N*long(N))
// SC -> O(N)
public class MergeOverlappingIntervals {

    public ArrayList<Interval> merge(ArrayList<Interval> intervals) {

        Collections.sort(intervals, (i1, i2) -> i1.start - i2.start);
        Interval curr = intervals.get(0);
        ArrayList<Interval> res = new ArrayList<>();
        res.add(curr);

        for (int i = 1; i < intervals.size(); i++) {

            Interval interval = intervals.get(i);

            if (interval.start <= curr.end) {
                curr.start = Math.min(curr.start, interval.start);
                curr.end = Math.max(curr.end, interval.end);
            }

            else {
                res.add(interval);
                curr = interval;
            }
        }

        return res;
    }
}
