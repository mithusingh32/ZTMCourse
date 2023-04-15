// Topic: Data management using tuples
//
// Requirements:
// * Print whether the y-value of a cartesian coordinate is
//   greater than 5, less than 5, or equal to 5
//
// Notes:
// * Use a function that returns a tuple
fn get_coord(x: i32, y:i32) -> (i32, i32) {
    return (x, y);
}
// * Destructure the return value into two variables
// * Use an if..else if..else block to determine what to print

fn main() {
    let (x, y) = get_coord(1, 2);
    println!("{} {}", x, y);
}
