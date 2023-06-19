use rusqlite::{params, Connection};

use crate::{
    bill::{get_bill, view_bills, Bill},
    constants::{CATEGORY_COL, ID_COL, NAME_COL, TABLENAME, TOTAL_COL},
    utils::get_input,
};

/// Update bill prompt and business logic
pub fn update_prompt(conn: &Connection) {
    view_bills(conn);
    println!("Select bill to update: ");
    let mut bill: Bill;
    loop {
        let input = get_input().unwrap().trim().to_owned();
        match input.as_str() {
            "" => {
                println!("Please enter a valid ID.");
                continue;
            }
            str => match str.parse::<i32>() {
                Ok(id) => {
                    bill = get_bill(conn, Some(id)).unwrap();
                    break;
                }
                Err(_) => {
                    println!("Input needs to be a number. Try again.");
                    continue;
                }
            },
        }
    }

    println!("Enter new name [Leave blank if you don't want to change it]:");
    match get_input().unwrap().as_str() {
        "" => (),
        str => bill.update_name(str.to_owned()),
    };

    println!("Enter new total [Leave blank if you don't want to change it]: ");
    match get_input().unwrap().as_str() {
        "" => (),
        str => match str.parse::<f32>() {
            Ok(num) => bill.update_total(num),
            Err(_) => println!("Could not parse number, not changing total"),
        },
    };

    println!("Enter new category [Leave blank if you don't want to change it]: ");
    match get_input().unwrap().as_str() {
        "" => (),
        str => bill.update_category(Some(str.to_owned())),
    };

    match update_bill(conn, bill) {
        Ok(_) => println!("Bill udpated."),
        Err(e) => println!("Could not update bill. {}", e),
    }
}

/// Update the bill in the database for an ID
fn update_bill(conn: &Connection, bill: Bill) -> Result<(), rusqlite::Error> {
    let sql = format!(
        "UPDATE {} 
                SET
                    {} = ?1,
                    {} = ?2,
                    {} = ?3
                WHERE {} = ?4",
        TABLENAME, NAME_COL, CATEGORY_COL, TOTAL_COL, ID_COL
    );
    let mut st = conn.prepare(sql.as_str())?;
    st.execute(params![bill.name, bill.category, bill.total, bill.id])?;
    Ok(())
}
