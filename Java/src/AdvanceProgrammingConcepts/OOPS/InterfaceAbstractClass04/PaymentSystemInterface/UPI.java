package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.PaymentSystemInterface;

public class UPI implements PaymentMethod{

    public void validate(){
        System.out.println("Validating UPI ID");
    }

    public void pay(double amount){
        System.out.println("Paying "+amount+" via UPI");
    }
}
