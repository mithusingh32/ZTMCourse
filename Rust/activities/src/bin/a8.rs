// Topic: Organizing similar data using structs
//
// Requirements:
// * Print the flavor of a drink and it's fluid ounces
//
// Notes:
// * Use an enum to create different flavors of drinks
enum DrinkFlavor {
    Apple,
    Peach,
    Orange,
}
// * Use a struct to store drink flavor and fluid ounce information
struct DrinkOrder {
    flavor: DrinkFlavor,
    size: i32,
}
// * Use a function to print out the drink flavor and ounces
// * Use a match expression to print the drink flavor
fn get_order(order: DrinkOrder) {
    let flavor =
        match order.flavor {
            DrinkFlavor::Apple => "apple",
            DrinkFlavor::Peach => "peach",
            DrinkFlavor::Orange => "orange",
        };

    println!("You ordered a {} in a size {}oz", flavor, order.size);
}


fn main() {
    let my_order = DrinkOrder {
        flavor: DrinkFlavor::Apple,
        size: 10
    };

    get_order(my_order);

}
