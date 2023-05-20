// Modules - help keep coade self contained and easy to follow

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn subtract(a: i32, b: i32) -> i32 {
    b - a
}

// We can group up function into modules:
mod greet {

    // We need to use the pub keyword to indicate that it's a public thing
    // so it can be used outside the module
    pub fn hello() {
        println!("hello")
    }

    pub fn goodbye() {
        println!("good");
        bye()
    }

    fn bye() {
        println!("bye\n")
    }
}

fn main() {
    // To use the model we use the model name and then :: function
    greet::hello();
    greet::goodbye();
}
