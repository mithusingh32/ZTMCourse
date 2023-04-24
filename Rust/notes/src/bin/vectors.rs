// Vectors are like arrays, but can grow
// Must be of the same data type

fn main() {
    let my_numbers = vec![1, 2, 3];

    let mut my_nums = Vec::new();
    my_nums.push(1);
    my_nums.push(2);
    my_nums.push(3);
    my_nums.push(4);
    my_nums.push(5);

    let two = my_nums[1];
    println!("{}", two);
    println!("{:?}", my_numbers);

    // for in loop, essentially a forEach loop in java or js
    for num in my_numbers {
        println!("for in loop {}", num);
    }

    // Prog to track test scores
    struct Test {
        score: i32,
    }

    let my_scores = vec![
        Test { score: 90 },
        Test { score: 80 },
        Test { score: 33 },
        Test { score: 45 },
    ];

    for test in my_scores {
        if test.score > 50 {
            println!("You passed with a {}", test.score);
        }

        if test.score < 50 {
            println!("You have failed with a {}", test.score);
        }
    }
}
