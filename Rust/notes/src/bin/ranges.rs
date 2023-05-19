// Range

//
fn main() {
    let range = 1..=3; // creates the range of values from to 1 to 3
    let range_2 = 1..3; // creates the range of values from 1 to 2

    // We can do numbers
    for num in 1..4 {
        println!("{:?}", num);
    }

    // We can do characters
    for ch in 'a'..='f' {
        println!("{:?}", ch);
    }
}
