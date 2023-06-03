use crate::bill::Bill;
use rusqlite::{params, Connection};

pub fn add_prompt() {
    // TODO
}

pub fn add_bill(conn: &Connection, bill: Bill) -> bool {
    let val_name: String;
    let val_parameters: String;

    match &bill {
        Bill {
            id: None,
            name,
            category,
            total,
        } => {
            val_name = "name, category, total".to_owned();
            val_parameters = "=?1, =?2, =?3".to_owned();
        }
        Bill {
            id: None,
            category: None,
            name,
            total,
        } => {
            val_name = "name, total".to_owned();
            val_parameters = "=?1, =?2".to_owned();
        }
        Bill { .. } => {
            val_name = "".to_owned();
            val_parameters = "".to_owned();
        }
    };

    let query = format!(
        "INSERT INTO bills ({}) VALUES ({})",
        val_name, val_parameters
    );

    match conn.execute(query.as_str(), params![]) {
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
