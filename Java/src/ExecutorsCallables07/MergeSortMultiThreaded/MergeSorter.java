package ExecutorsCallables07.MergeSortMultiThreaded;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

public class MergeSorter implements Callable<List<Integer>> {

    private final List<Integer> listToSort;
    private final ExecutorService executorService;

    public MergeSorter(List<Integer> listToSort, ExecutorService executorService){
        this.listToSort = listToSort;
        this.executorService = executorService;
    }

    public List<Integer> mergeSortedLists(List<Integer> list1, List<Integer> list2){

        List<Integer> mergedList = new ArrayList<>();
        int i = 0, j = 0;

        while(i < list1.size() && j < list2.size()){

            if(list1.get(i) <= list2.get(j)){
                mergedList.add(list1.get(i));
                i++;
            }else{
                mergedList.add(list2.get(j));
                j++;
            }
        }

        while(i < list1.size()){
            mergedList.add(list1.get(i));
            i++;
        }

        while(j < list2.size()){
            mergedList.add(list2.get(j));
            j++;
        }

        return mergedList;
    }

    @Override
    public List<Integer> call() throws Exception {

        int n = this.listToSort.size();

        if(n <= 1) return this.listToSort;

        List<Integer> leftHalf = new ArrayList<>();
        List<Integer> rightHalf = new ArrayList<>();

        for(int i=0; i<n/2; i++)
            leftHalf.add(this.listToSort.get(i));

        for(int i=n/2; i<n; i++)
            rightHalf.add(this.listToSort.get(i));

        MergeSorter leftSorter = new MergeSorter(leftHalf,executorService);
        MergeSorter rightSorter = new MergeSorter(rightHalf,executorService);

        Future< List<Integer>> leftSortedFuture = executorService.submit(leftSorter);
        Future<List<Integer>> rightSortedFuture = executorService.submit(rightSorter);

        List<Integer> leftSorted = leftSortedFuture.get(); // Blocking call
        List<Integer> rightSorted = rightSortedFuture.get();

        executorService.shutdown();

        return mergeSortedLists(leftSorted, rightSorted);
    }
}
