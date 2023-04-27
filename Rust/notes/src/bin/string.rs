// String
//
// 2 Common types:
//    String type - owned type
//    &str - borrowed string SLICE (BIG DIFFERENT)
// If you need to use a string in a struct, it must be String and not a slice
// When passing string around, use the &str and not the String

//Struct can only use String and not the sliced string
struct Example {
    string: String, // string: &str is not allows
}

//Passing String to a function
fn print_str(data: &str) {
    // We pass in the borrowed string slice to the function
    println!("{}", data);
}

fn main() {
    print_str("this is a borrowed string"); // This is a borrowed string so the function owns the
                                            // string
    let owned_string = "owned string".to_owned();
    let another_owned = String::from("another owned string");
    print_str(&owned_string);
    print_str(&another_owned);

    let ex = Example {
        string: String::from("string in a struct"),
    };

    print_str(&ex.string);
}
