package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.PaymentSystemInterface;

public class Crypto implements PaymentMethod{

    public void validate(){
        System.out.println("Validating crypto account");
    }

    public void pay(double amount){
        System.out.println("Paying "+amount+" via crypto");
    }
}
