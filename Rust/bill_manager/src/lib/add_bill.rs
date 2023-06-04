use crate::bill::Bill;
use rusqlite::{params, Connection};
use std::io;

pub fn add_prompt() -> io::Result<Bill> {
    let mut name_buffer = String::new();
    let mut total_buffer = String::new();
    let mut category_buffer = String::new();

    println!("Adding bill, please fill out the following: ");
    println!("Name: ");
    io::stdin().read_line(&mut name_buffer)?;
    println!("Total: ");
    io::stdin().read_line(&mut total_buffer)?;
    println!("Category: ");
    io::stdin().read_line(&mut category_buffer)?;

    let new_bill = Bill {
        id: None,
        name: name_buffer.trim().to_owned(),
        total: total_buffer.trim().parse().unwrap(),
        category: Some(category_buffer.trim().to_owned()),
    };

    Ok(new_bill)
}

pub fn add_bill(conn: &Connection, bill: Bill) -> bool {
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
