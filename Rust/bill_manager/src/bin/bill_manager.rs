use bill_manager::enums::Action;
use rusqlite::{Connection, Error};
use std::{io, process::exit};

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

fn get_input() -> io::Result<String> {
    let mut buffer = String::new();
    io::stdin().read_line(&mut buffer)?;
    Ok(buffer.trim().to_owned())
}

fn databaste_connection() -> Result<Connection, Error> {
    let path = "./bills.db3";
    println!("Connecting to database");
    Connection::open(path)
}

fn main() {
    let db = match databaste_connection() {
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
            Action::Add => println!("Adding Bill"),
            Action::View => println!("View Bill"),
            Action::Remove => println!("Removing Bill"),
            Action::Update => println!("Upating bill"),
            Action::Total => println!("Totalling bills"),
            Action::Error => println!("Input incorect"),
        };
    }
}
