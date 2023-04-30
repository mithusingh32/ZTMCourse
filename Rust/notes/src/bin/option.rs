// Option - Allows for optional data. Option has 2 states: Somee data or None

struct Customer {
    age: Option<i32>, // Age is optional
    email: String,
}

fn main() {
    println!("Option");

    let mark = Customer {
        age: Some(30),
        email: String::from("mark@mark"),
    };

    let becky = Customer {
        age: None,
        email: String::from("beck@becky"),
    };

    match mark.age {
        Some(10) => println!("too young"),
        Some(age) => println!("{}", age),
        None => (),
    };
}
