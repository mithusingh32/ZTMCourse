// Each enum is called a variant
enum Direction {
    Up,
    Down,
    Left,
    Right
}

fn get_direction(go: Direction) {
    // Now we can use pattern matching
    match go {
        Direction::Up => println!("Up"),
        Direction::Down => println!("Down"),
        Direction::Left => println!("Left"),
        Direction::Right => println!("Right"),
    }
}

fn main() {
    get_direction(Direction::Up);
}
