package AdvanceProgrammingConcepts.OOPS.InheritancePolymorphism03;

public class Address {

    String houseNumber;
    String area;
    String pinCode;

    Address(String houseNumber, String area, String pinCode) {
        this.houseNumber = houseNumber;
        this.area = area;
        this.pinCode = pinCode;
    }

    Address(Address address) {
        this.houseNumber = address.houseNumber;
        this.area = address.area;
        this.pinCode = address.pinCode;
    }
}
