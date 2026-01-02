import java.util.ArrayList;

// TC -> O(N)
// SC -> O(N)
public class MergeIntervals {

    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {

        ArrayList<Interval> res = new ArrayList<>();
        int idx = 0, n = intervals.size();

        while (idx < n && intervals.get(idx).end < newInterval.start) {
            res.add(intervals.get(idx));
            idx++;
        }

        while (idx < n && intervals.get(idx).start <= newInterval.end) {
            newInterval.start = Math.min(newInterval.start, intervals.get(idx).start);
            newInterval.end = Math.max(newInterval.end, intervals.get(idx).end);
            idx++;
        }
        res.add(newInterval);

        while (idx < n) {
            res.add(intervals.get(idx));
            idx++;
        }

        return res;
    }
}
