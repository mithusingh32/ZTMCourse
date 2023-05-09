// Hashmaps
// Collection that stores as key-value pairs
//   Data is stored using the key
//   The data itself is the value

use std::collections::HashMap;

fn main() {
    let mut people = HashMap::new(); // Create a new hash map
    people.insert("Susan", 21); // Add a key called "Susan" with a value if 21
    people.insert("Susan1", 13);
    people.insert("Susan2", 15);
    people.insert("Susan3", 20);
    people.insert("Susan4", 30);
    people.insert("Susan5", 30);

    people.remove("Susan5"); // Remove the entry with the key "Susan5"

    // HashMap::get returns an Option
    match people.get("Susan") {
        Some(age) => println!("Age = {:?}", age),
        None => println!("Not found"),
    }

    // Iterating through a hashmap
    // iter() ALWAYS borrows the value
    for (person, age) in people.iter() {
        println!("getting both key {} and value {}", person, age);
    }

    // Or we can go through the keys or values of the map
    for person in people.keys() {}
    for age in people.values() {}
}
