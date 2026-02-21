package AdvanceProgrammingConcepts.InterfaceAbstractClass04.FoodOrderSystemAbstractClass;

public class Pizza extends FoodItem{

    Pizza(String name, int basePrice){
        super(name, basePrice);
    }

    void prepare(){
        System.out.println("Preparing "+super.name+" ...");
    }

    int calculateFinalPrice(){
        return super.basePrice+50;
    }
}
