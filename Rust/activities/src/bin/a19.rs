// Topic: HashMap
// Topic: HashMap
//
// Requirements:
// * Print the name and number of items in stock for a furniture store
// * If the number of items is 0, print "out of stock" instead of 0
// * The store has:
//   * 5 Chairs
//   * 3 Beds
//   * 2 Tables
//   * 0 Couches
// * Print the total number of items in stock
//
// Notes:
// * Use a HashMap for the furniture store stock

use std::collections::HashMap;

fn main() {
    println!("hi");
    let mut inventory: HashMap<&str, i32> = HashMap::new();
    inventory.insert("Chairs", 5);
    inventory.insert("Beds", 3);
    inventory.insert("Tables", 2);
    inventory.insert("Couches", 0);

    let mut total_items = 0;
    for items in inventory.values() {
        total_items = total_items + items;
    }

    println!("There are {} total items.", total_items);

    for (item, val) in inventory.iter() {
        if val == &0 {
            println!("{} is out of stock", item);
        } else {
            println!("{} costs {}", item, val);
        }
    }
}
