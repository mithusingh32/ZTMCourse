// User Input
use std::io; // Library to handle input and output

// io::Result has so many different errors that it can be hard to handle all the cases
// so it provides it's own Result type
fn get_input() -> io::Result<String> {
    let mut buffer = String::new(); // create buffer
    io::stdin().read_line(&mut buffer)?; //read the input line and populate the buffer
    Ok(buffer.trim().to_owned())
}

fn main() {
    println!("Enter your first name: ");
    let first_name = get_input().unwrap();
    println!("Enter your last name: ");
    let last_name = get_input().unwrap();
    println!("Welcome {} {}", first_name, last_name);

    println!("Enter 2 things:");
    let mut all_input = vec![];
    let mut times_input = 0;
    while times_input < 2 {
        match get_input() {
            Ok(word) => {
                all_input.push(word);
                times_input += 1;
            }
            Err(e) => println!("error {:?}", e),
        }
    }

    for word in all_input {
        println!("input caps: {}", word.to_uppercase());
    }
}
