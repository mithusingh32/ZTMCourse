// Iterators allow us to iterate over a data collection without
// having to write a for loop. It also allows us to call specific
// methods on it such as filter and map

fn main() {
    let number = vec![1, 2, 3, 4, 5];

    let mut plus_one = vec![];
    for num in &number {
        plus_one.push(num + 1);
    }

    // The same can be done using iter
    // collect will create a new vector (requires us to put type annotaion)
    //
    // Iterator always returns a reference value, so to generate a new vector you need to use
    // iter().copied()

    // We pass ownership of the values to the new vector.
    let plus_one_iter: Vec<i32> = number.iter().map(|num| num + 1).collect(); // We pass the

    // To create new vectors that don't reference the original values, we need to
    // iter().copied().
    let new_numbers_map: Vec<i32> = number.iter().copied().map(|num| num + 2).collect();
    let new_numbers: Vec<i32> = number.iter().copied().filter(|num| num > &2).collect();
    println!("{:?}", new_numbers);

    // find returns an Option after finding the first element that meets the condition
    let find_num: Option<i32> = number.iter().copied().find(|num| num == &3);

    // We can also get last, min, max
    let last: Option<i32> = number.iter().copied().last();
    let max: Option<i32> = number.iter().copied().max();
    let min: Option<i32> = number.iter().copied().min();

    // We can also create partial vectors
    let smaller_vec: Vec<i32> = number.iter().copied().take(3).collect();
}
