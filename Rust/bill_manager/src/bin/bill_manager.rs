use bill_manager::add_bill::add_bill;
use bill_manager::bill::view_bills;
use bill_manager::db_utils::{create_table, database_connection};
use bill_manager::enums::Action;
use bill_manager::utils::get_input;
use std::process::exit;

fn print_menu() {
    println!("== Manage Bills ==");
    println!("1. Add Bill");
    println!("2. View Bills");
    println!("3. Remove Bill");
    println!("4. Update Bill");
    println!("5. Bill Total");
    println!("q. Quit");
    println!("\nEnter Selection: ");
}
fn main() {
    let db = match database_connection() {
        Ok(conn) => {
            println!("Successfully connected to db");
            conn
        }
        Err(e) => {
            println!("Error connecting to DB");
            println!("{}", e);
            exit(2);
        }
    };

    match create_table(&db) {
        Ok(_) => println!("Tables created"),
        Err(e) => {
            println!("Error creating tables");
            println!("{}", e);
            exit(1)
        }
    };

    loop {
        print_menu();
        let user_input = get_input().unwrap();
        let action = match user_input.as_str() {
            "1" => Action::Add,
            "2" => Action::View,
            "3" => Action::Remove,
            "4" => Action::Update,
            "5" => Action::Total,
            "q" => {
                println!("\nExiting...");
                if let Err(e) = db.close() {
                    println!("Error closing db");
                    println!("{:?}", e);
                }
                exit(0);
            }
            _ => Action::Error,
        };

        // This will reset the terminal after every entry
        print!("{esc}[2J{esc}[1;1H", esc = 27 as char);

        match action {
            Action::Add => add_bill(&db),
            Action::View => view_bills(&db),
            Action::Remove => println!("Removing Bill"),
            Action::Update => println!("Upating bill"),
            Action::Total => println!("Totalling bills"),
            Action::Error => println!("Input incorect"),
        };
    }
}
