// Advanced Enums
//
// Enums variants can hold additional data:
#[derive(Debug)]
enum PromoDiscount {
    NewUser,
    OtherPromo(String),
    Holiday(String), // The Holiday variant can hold a string
}

#[derive(Debug)]
enum Discount {
    Percent(i32),
    Flat(i32),
    Promo(PromoDiscount), // Variants can also store other enums
}

struct Ticket {
    event: String,
    price: i32,
    discount: Discount,
}

fn main() {
    // Simple Matching
    let n = 3;
    match n {
        3 => println!("its three"),
        _ => println!("its other"), // we can change _ to an actual variable if we care for it
    }

    let flat = Discount::Flat(10);
    match flat {
        Discount::Flat(10) => println!("Flat discount of 10"), // You can match for a specific val
        Discount::Flat(amount) => println!("Flat discount of {:?}", amount), // Or use a variable
        _ => (), // We need to match on everything. The () just return nothing
    };

    let ticket = Ticket {
        event: "Party".to_owned(),
        price: 100,
        discount: flat,
    };

    match ticket {
        // The 2 dots tell match that we're ignoring everything else in the struct
        Ticket {
            price: 50, event, ..
        } => println!("The {:?} costs", event), // we can also match on values on for a particular data in the struct
        Ticket { price, .. } => println!("price = {:?}", price),
        _ => (),
    }
}
