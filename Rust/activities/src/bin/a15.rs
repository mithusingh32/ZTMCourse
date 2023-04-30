// Topic: Advanced match
//
// Requirements:
// * Print out a list of tickets and their information for an event
// * Tickets can be Backstage, Vip, and Standard
// * Backstage and Vip tickets include the ticket holder's name
// * All tickets include the price
#[derive(Debug)]
enum TicketType {
    Standard,
    Backstage(String),
    Vip(String),
}

#[derive(Debug)]
struct Ticket {
    price: i32,
    ticket_type: TicketType,
}
// Notes:
// * Use an enum for the tickets with data associated with each variant
// * Create one of each ticket and place into a vector
// * Use a match expression while iterating the vector to print the ticket info

fn main() {
    let tickets = vec![
        Ticket {
            price: 10,
            ticket_type: TicketType::Standard,
        },
        Ticket {
            price: 20,
            ticket_type: TicketType::Backstage("John".to_owned()),
        },
        Ticket {
            price: 30,
            ticket_type: TicketType::Vip("Bob".to_owned()),
        },
    ];

    for ticket in &tickets {
        match ticket {
            Ticket {
                price: 10,
                ticket_type,
            } => println!("Welcome. You have a {:?} which costs $10", ticket_type),
            Ticket {
                price,
                ticket_type: TicketType::Vip(name),
            } => println!(
                "Welcome, {:?}. You have VIP access which costs {:?}",
                name, price
            ),
            Ticket {
                price,
                ticket_type: TicketType::Backstage(name),
            } => println!("Welcome {name} to backstage. You paid {:?}", price),
            _ => (),
        };
    }
}
