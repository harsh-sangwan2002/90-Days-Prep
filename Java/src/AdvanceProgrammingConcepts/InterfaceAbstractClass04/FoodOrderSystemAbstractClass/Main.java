package AdvanceProgrammingConcepts.InterfaceAbstractClass04.FoodOrderSystemAbstractClass;

public class Main {

    public static void main(String[] args) {

        FoodItem foodItem;

        foodItem = new Pizza("Pizza", 100);
        foodItem.showDetails();
        foodItem.prepare();
        System.out.println("Final price is: "+foodItem.calculateFinalPrice());

        System.out.println("------------------------");

        foodItem = new Burger("Burger", 80);
        foodItem.showDetails();
        foodItem.prepare();
        System.out.println("Final price is: "+foodItem.calculateFinalPrice());
    }
}
