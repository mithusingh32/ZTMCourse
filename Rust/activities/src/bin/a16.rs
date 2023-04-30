// Topic: Option
//
// Requirements:
// * Print out the details of a student's locker assignment
// * Lockers use numbers and are optional for students
//
// Notes:
// * Use a struct containing the student's name and locker assignment
// * The locker assignment should use an Option<i32>

// * Use a struct containing the student's name and locker assignment
// * The locker assignment should use an Option<i32>
struct Student {
    name: String,
    locker: Option<i32>,
}

fn main() {
    let students = vec![
        Student {
            name: String::from("John"),
            locker: None,
        },
        Student {
            name: String::from("Bob"),
            locker: Some(1),
        },
        Student {
            name: String::from("Hank"),
            locker: Some(9),
        },
    ];

    for student in &students {
        match student.locker {
            Some(locker) => println!("{} your locker is {}", student.name, locker),
            None => println!("{} does not get a locker.", student.name),
        }
    }
}
