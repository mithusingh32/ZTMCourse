use rusqlite::Connection;

use crate::{
    bill::view_bills,
    constants::{ID_COL, TABLENAME},
    utils::get_input,
};

/// Prompts the user, asking what bill to delete
pub fn delete_bill_prompt(conn: &Connection) {
    view_bills(conn);
    println!("Enter the ID (Or all to delete all bills) of the bill to delete: ");
    loop {
        match get_input().unwrap().trim() {
            "all" | "ALL" => {
                delete_all_bills(conn);
                break;
            }
            num => match num.parse::<i32>() {
                Ok(input_id) => {
                    delete_bill(conn, input_id);
                    break;
                }
                Err(_) => {
                    println!("Input needs to be an id, try again.");
                    continue;
                }
            },
        };
    }
}

/// Delete bill from the database
fn delete_bill(conn: &Connection, id: i32) {
    let sql = format!("DELETE FROM {} WHERE {} = ?1;", TABLENAME, ID_COL);
    let mut st = conn.prepare(sql.as_str()).unwrap();
    match st.execute([id]) {
        Ok(_) => println!("Bill successfully delete."),
        Err(e) => println!("Failed to delete bill, {}", e),
    };
}

fn delete_all_bills(conn: &Connection) {
    let sql = format!("DELETE FROM {}", TABLENAME);
    let mut st = conn.prepare(sql.as_str()).unwrap();
    match st.execute([]) {
        Ok(_) => println!("All bills successfully delete."),
        Err(e) => println!("Failed to delete bills, {}", e),
    };
}
