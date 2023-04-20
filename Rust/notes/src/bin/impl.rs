// impl lets us implement functions to structs

struct Temp {
    degree: i32,
}

impl Temp {
    // This would be similar to static functions ;
    fn print_temp(temp: &Temp) {
        println!("Current temp is {}.", temp.degree);
    }

    // This is a function that is called reference to self
    fn print_temp_ref_self(&self) {
        println!("Degree ref self: {}", self.degree);
    }

    // We're telling rust that we're going to create a new Struct and return that
    // by saying we're going to return Self
    fn freezing() -> Self {
        Self { degree: 0 } // we're creating a new struct of it self
    }
}

fn main() {
    let current_temp = Temp { degree: 32 };
    Temp::print_temp(&current_temp); // We can use the implement function. Its similar to how we call
                                     // static functions in Java

    current_temp.print_temp_ref_self();

    let freezing_temp = Temp::freezing();
    freezing_temp.print_temp_ref_self();
}
