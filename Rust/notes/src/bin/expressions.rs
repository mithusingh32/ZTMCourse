// Rust is a expression based languages
// Its like setting a variable to the return of a statement
// but in rust it can be simple as an if statement

fn main() {
    let my_num = 3;
    let is_lt_5 = if my_num < 5 {
        true 
    } else {
        false
    }; // dont forget the semicolon

    println!("Is my_num greater than 5: {}", is_lt_5);

}
