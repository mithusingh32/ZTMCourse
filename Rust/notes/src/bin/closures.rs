// Closures - its anon function
// They are created using ||
fn main() {
    let add = |x: i32, y: i32| x + y;
    println!("{}", add(1, 2))
}
