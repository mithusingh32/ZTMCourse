// while..let
fn main() {
    let mut data = Some(3);

    // This will run the loop until data is None
    while let Some(i) = data {
        println!("loop");
        data = None;
    }

    // This is useful when we want to iterate over a data
    // structure
    let number = vec![1, 2, 3];
    let mut num_iter = number.iter();
    while let Some(num) = num_iter.next() {
        println!("{:?}", num);
    }
}s
