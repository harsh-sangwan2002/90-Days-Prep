package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.PaymentSystemInterface;

public class CreditCard implements PaymentMethod{

    public void validate(){
        System.out.println("Validating credit card");
    }

    public void pay(double amount){
        System.out.println("Paying "+amount+" via credit card");
    }
}
