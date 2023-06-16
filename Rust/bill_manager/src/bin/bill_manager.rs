use bill_manager::add_bill::{add_bill_to_db, add_prompt};
use bill_manager::db_utils::create_table;
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

fn database_connection() -> Result<Connection, Error> {
    // TODO - use dotenv to get db path
    let path = "./bills.db3";
    Connection::open(path)
}

fn add_bill(conn: &Connection) {
    loop {
        println!("==========================================");
        if let Ok(bill) = add_prompt() {
            if add_bill_to_db(conn, bill) {
                println!("Successfully added bill!")
            } else {
                println!("Failed to add bill")
            }

            println!("Add another bill?");
            if let Ok(input) = get_input() {
                loop {
                    match input.as_str() {
                        "y" | "Y" | "yes" | "YES" => break,
                        "n" | "N" | "NO" | "no" => return,
                        _ => {
                            println!("Input not recognized, try again");
                            continue;
                        }
                    }
                }
            }
        }
    }
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
            Action::View => println!("View Bill"),
            Action::Remove => println!("Removing Bill"),
            Action::Update => println!("Upating bill"),
            Action::Total => println!("Totalling bills"),
            Action::Error => println!("Input incorect"),
        };
    }
}
