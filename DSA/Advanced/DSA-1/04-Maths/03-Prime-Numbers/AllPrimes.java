// TC -> O(N*log log N)
// SC -> O(N)
public class AllPrimes {

    public int[] solve(int A) {

        boolean[] primes = new boolean[A+1];
        List<Integer> list = new ArrayList<>();

        for(int i=2; i<=Math.sqrt(A); i++){

            if(!primes[i]){

                for(int j=i*i; j<=n; j+=i)
                    primes[j] = true;
            }
        }

        for(int i=2; i<=A; i++){

            if(!primes[i])
                list.add(i);
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for(int val : list)
            res[idx++] = val;

        return res;
    }
}