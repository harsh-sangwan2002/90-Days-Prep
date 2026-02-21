package AdvanceProgrammingConcepts.OOPS.InterfaceAbstractClass04.FoodOrderSystemAbstractClass;

public abstract class FoodItem {

    String name;
    int basePrice;

    FoodItem(String name, int basePrice){
        this.name = name;
        this.basePrice = basePrice;
    }

    void showDetails(){
        System.out.println("Name: " + name);
        System.out.println("Base price: " + basePrice);
    }

    abstract void prepare();
    abstract int calculateFinalPrice();
}
