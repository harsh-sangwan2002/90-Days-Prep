package AdvanceProgrammingConcepts.InterfaceAbstractClass04.FoodOrderSystemAbstractClass;

public class Burger extends FoodItem{

    Burger(String name, int basePrice){
        super(name, basePrice);
    }

    void prepare(){
        System.out.println("Preparing "+super.name+" ...");
    }

    int calculateFinalPrice(){
        return super.basePrice+30;
    }
}
