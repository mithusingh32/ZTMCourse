// Topic: Implementing functionality with the impl keyword
//
// Requirements:
// * Print the characteristics of a shipping box
// * Must include dimensions, weight, and color
//
// Notes:
// * Use a struct to encapsulate the box characteristics

struct Box {
    width: i32,
    height: i32,
    weight: i32,
    color: Color,
}

// * Use an enum for the box color
#[derive(Debug)]
enum Color {
    Green,
    Brown,
    Black,
    White,
}

// * Implement functionality on the box struct to create a new box
impl Box {
    fn create_box(width: i32, height: i32, weight: i32, color: Color) -> Self {
        Self {
            width,
            height,
            weight,
            color,
        }
    }

    fn print_info(&self) {
        println!(
            "The box is {} wide, {}, tall, weighs {}, and is the color {:?}",
            self.width, self.height, self.weight, self.color
        )
    }
}

// * Implement functionality on the box struct to print the characteristics

fn main() {
    let a_box = Box::create_box(10, 10, 100, Color::White);
    a_box.print_info();
}
