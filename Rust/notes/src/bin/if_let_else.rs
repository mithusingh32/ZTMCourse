// if..let..else

enum Color {
    Red,
    Blue,
    Green,
}

fn main() {
    let maybe_user = Some("Jerry");
    match maybe_user {
        Some(user) => println!("{:?}", user),
        None => println!("No you user found"),
    };

    // We don't care if there is no data, we can use if..let
    if let Some(user) = maybe_user {
        println!("{:?}", user);
    } else {
        println!("No user")
    };

    // We don't need to have the else case. The above 2 statements are identical
    // except with if..let you don't need to account for all the possible pattersn

    // It also works on enums
    let red = Color::Red;
    if let Color::Red = red {
        println!("It's read");
    }

    // As seen above we don't care for any other cases
}
