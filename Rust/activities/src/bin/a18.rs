// Topic: Result
//
// Requirements:
// * Create an structure named `Adult` that represents a person aged 21 or older:
//   * The structure must contain the person's name and age
//   * Implement Debug print functionality using `derive`
#[derive(Debug)]
struct Adult {
    name: String,
    age: i32,
}
// * Implement a `new` function for the `Adult` structure that returns a Result:
//   * The Ok variant should contain the initialized structure, but only
//     if the person is aged 21 or older
//   * The Err variant should contain a String (or &str) that explains why
//     the structure could not be created
impl Adult {
    fn new(name: String, age: i32) -> Result<Self, String> {
        if age >= 21 {
            Ok(Self { name, age })
        } else {
            Err("Not old enough".to_owned())
        }
    }

    fn check_if_adult(res: &Result<Self, String>) {
        match res {
            Ok(adult) => println!("{} is an adult of age {}", adult.name, adult.age),
            Err(str) => println!("Can not create obj. {}", str),
        }
    }
}
// * Instantiate two `Adult` structures:
//   * One should be aged under 21
//   * One should be 21 or over
// * Use `match` to print out a message for each `Adult`:
//   * For the Ok variant, print any message you want
//   * For the Err variant, print out the error message

fn main() {
    let adult = Adult::new("John".to_owned(), 22);
    let not_adult = Adult::new("Bob".to_owned(), 20);
    Adult::check_if_adult(&adult);
    Adult::check_if_adult(&not_adult)
}
