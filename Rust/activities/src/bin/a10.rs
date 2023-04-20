// Topic: Working with expressions
//
// Requirements:
// * Print "its big" if a variable is > 100
// * Print "its small" if a variable is <= 100
//
// Notes:
// * Use a boolean variable set to the result of
//   an if..else expression to store whether the value
//   is > 100 or <= 100
// * Use a function to print the messages
// * Use a match expression to determine which message
//   to print

fn print_message(is_gt_100: bool) {
    match is_gt_100 {
        true => println!("Its greater than 100"),
        false => println!("Its less than or equal 100")
    }
}

fn main() {
    let num = 100;
    let is_gt_100 = num > 100;
    print_message(is_gt_100);
}
