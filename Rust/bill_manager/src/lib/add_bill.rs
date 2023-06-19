use crate::bill::Bill;
use crate::utils::get_input;
use rusqlite::Connection;
use std::io;

/// Prompt user and add bill into the database
pub fn add_bill(conn: &Connection) {
    loop {
        println!("==========================================");
        if let Ok(bill) = add_prompt() {
            if add_bill_to_db(conn, bill) {
                println!("Successfully added bill!")
            } else {
                println!("Failed to add bill")
            }

            println!("Add another bill? [y/n]");
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

/// Logic to handle the user input for adding a bill
fn add_prompt() -> io::Result<Bill> {
    let mut name_buffer = String::new();
    let mut total_buffer = String::new();
    let mut category_buffer = String::new();

    println!("==========================================");
    println!("Adding bill, please fill out the following");
    println!("==========================================");
    loop {
        println!("Name: ");
        io::stdin().read_line(&mut name_buffer)?;
        match name_buffer.trim() {
            "" => {
                println!("Name cannot be empty");
                continue;
            }
            _ => break,
        }
    }

    loop {
        println!("\nTotal: ");
        io::stdin().read_line(&mut total_buffer)?;
        match total_buffer.trim() {
            "" => {
                println!("Name cannot be empty");
                continue;
            }
            _ => break,
        }
    }

    println!("\nCategory: ");
    io::stdin().read_line(&mut category_buffer)?;

    let new_bill = Bill::new(
        None,
        name_buffer.trim().to_owned(),
        Some(category_buffer.trim().to_owned()),
        total_buffer.trim().parse().unwrap(),
    );

    Ok(new_bill)
}

/// performs insert into database
fn add_bill_to_db(conn: &Connection, bill: Bill) -> bool {
    match conn.execute(
        "INSERT INTO bills (name, total, category) VALUES (?1, ?2, ?3)",
        (&bill.name, &bill.total, &bill.category),
    ) {
        Ok(_) => {
            println!("Bill added sucessfully");
            true
        }
        Err(error) => {
            println!("Bill could not be added.\n{}", error);
            false
        }
    }
}
