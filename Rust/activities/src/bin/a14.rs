// Topic: Strings
//
// Requirements:
// * Print out the name and favorite colors of people aged 10 and under
//
// Notes:
// * Use a struct for a persons age, name, and favorite colori
struct Person {
    age: i32,
    name: String,
    fav_color: String,
}

// * The color and name should be stored as a String
// * Create and store at least 3 people in a vector
// * Iterate through the vector using a for..in loop
// * Use an if expression to determine which person's info should be printed
// * The name and colors should be printed using a function

fn main() {
    let people = vec![
        Person {
            age: 10,
            name: String::from("Person1"),
            fav_color: String::from("Red"),
        },
        Person {
            age: 20,
            name: String::from("Person2"),
            fav_color: String::from("Green"),
        },
        Person {
            age: 8,
            name: String::from("Person3"),
            fav_color: String::from("Yellow"),
        },
        Person {
            age: 12,
            name: String::from("Person4"),
            fav_color: String::from("Brown"),
        },
        Person {
            age: 89,
            name: String::from("Person5"),
            fav_color: String::from("Green"),
        },
        Person {
            age: 4,
            name: String::from("Person6"),
            fav_color: String::from("Purple"),
        },
    ];

    for person in &people {
        if person.age >= 10 {
            println!(
                "{} is {} years old who like {}",
                person.name, person.age, person.fav_color
            );
        }
    }
}
