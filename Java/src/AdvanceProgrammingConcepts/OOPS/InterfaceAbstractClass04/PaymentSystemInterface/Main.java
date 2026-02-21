package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.PaymentSystemInterface;

public class Main {

    public static void main(String[] args) {

        PaymentMethod paymentMethod;

        paymentMethod = new CreditCard();
        paymentMethod.validate();
        paymentMethod.pay(123.456);

        paymentMethod = new UPI();
        paymentMethod.validate();
        paymentMethod.pay(123.456);

        paymentMethod = new Crypto();
        paymentMethod.validate();
        paymentMethod.pay(123.456);
    }
}
