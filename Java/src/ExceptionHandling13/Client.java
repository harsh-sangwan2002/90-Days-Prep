package ExceptionHandling13;

import java.io.File;
import java.io.FileReader;
import java.util.Scanner;

public class Client {

    public static void main(String[] args) throws Exception {

        Scanner scn = new Scanner(System.in);
        int x = scn.nextInt(), y = scn.nextInt();
        System.out.println("Before division");

        System.out.println(x/y);

        System.out.println("After division");

        readFile("abc.txt");
    }

    private static void readFile(String fileName) throws Exception{

        File file = new File(fileName);
        FileReader fr = new FileReader(file);
        fr.read();
    }
}
