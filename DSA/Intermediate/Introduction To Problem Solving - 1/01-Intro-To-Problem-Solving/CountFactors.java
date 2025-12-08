public class CountFactors {
    
    public int solve(int A) {

        int factors = 0;

        for(int i=1; i<=A/i; i++){

            if(A%i==0){

                if(i*i==A)
                factors++;

                else 
                factors+=2;
            }
        }

        return factors;
    }
}
