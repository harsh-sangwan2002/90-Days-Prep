package ExceptionHandling13;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class TryCatch {

    public static void main(String[] args) {

        try{
            Scanner scn = new Scanner(System.in);
            int a = scn.nextInt();
            int b = scn.nextInt();

            if(b==0)
                throw new ArithmeticException("Division by zero");

            System.out.println(a/b);

            File f = new File("abc.txt");
            FileReader  fr = new FileReader(f);
            fr.read();
        }catch (ArithmeticException e){
            System.out.println("Got an Arithmetic Exception");
        }catch (FileNotFoundException e){
            System.out.println("Got a File Not Found Exception");
        }catch (IOException e){
            System.out.println("Got an IO Exception");
        }catch (Exception e){
            System.out.println("Got an Exception");
        }finally{
            System.out.println("Inside finally block.");
        }

        System.out.println("Done");
    }
}
