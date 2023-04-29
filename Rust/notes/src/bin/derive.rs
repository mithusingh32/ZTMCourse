// Dervie Macro - Functionality provided by Rust for enums and structs (and tons of other things)
//
// Any struct that use the #[derive()] macro, all of its fields have to also

// Debug: Allows for easily printing out the data structure
// Clone & Copy: When ownership is supposed to be passed, instead a copy is made and passed to the function
//    Copy is implicit, inexpensive, and cannot be re-implemented (memcpy).
//    Clone is explicit, may be expensive, and may be re-implement arbitrarily.

#[derive(Debug, Clone, Copy)]
enum Position {
    Manager,
    Supervisor,
    Worker,
}

#[derive(Debug)]
struct Employee {
    name: String,
    position: Position,
}

fn main() {
    let emp = Employee {
        name: String::from(" ZTM"),
        position: Position::Worker,
    };

    // Now to print the above we'd have to use pattern matching
    // if we didn't have dervie used
    println!("{:?}", emp);
}
