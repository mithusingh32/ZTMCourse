// Topic: Iterator
//
// Requirements:
// * Triple the value of each item in a vector.
// * Filter the data to only include values > 10.
// * Print out each element using a for loop.
//
// Notes:
// * Use an iterator chain to accomplish the task.

fn main() {
    let data = vec![1, 2, 3, 4, 5];

    let new_data: Vec<i32> = data.iter().copied().map(|num| num * 3).collect();

    println!("{:?}", new_data);

    let larger_than_10: Vec<i32> = new_data.iter().copied().filter(|num| num > &10).collect();

    println!("{:?}", larger_than_10);

    for num in &data {
        println!("{}", num);
    }
}
