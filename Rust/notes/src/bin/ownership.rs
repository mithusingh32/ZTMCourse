// Ownership
//
// All programs must track their memory
// In rust the owner of the memory is responsible for cleaning up the memory
// Memory can be either moved or borrowed

enum Light {
    Bright,
    Dull,
}

fn display_light(light: Light) {
    match light {
        Light::Bright => println!("Light is bright."),
        Light::Dull => println!("Light is dull."),
    }
}

// The & tells that we're only borrowing the variable
fn display_light_borrow(light: &Light) {
    match light {
        Light::Bright => println!("Light is bright."),
        Light::Dull => println!("Light is dull."),
    }
}

fn main() {
    let dull = Light::Dull;
    display_light(dull); // The ownership of dull has moved to the display_light function. So it is
                         // not availble anymore. If we still want to own the variable we need to tell the function
                         // to only borrow the variable
                         // display_light(dull); this would error out

    let bright = Light::Bright;
    display_light_borrow(&bright);

    // Since we dont pass owner ship we can let the function borrow is over and over
    display_light_borrow(&bright);
    display_light_borrow(&bright);
}
