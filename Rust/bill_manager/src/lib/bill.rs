use rusqlite::Connection;

use crate::constants::{CATEGORY_COL, ID_COL, NAME_COL, TABLENAME, TOTAL_COL};

pub struct Bill {
    pub id: Option<i32>,
    pub name: String,
    pub category: Option<String>,
    pub total: f32,
}

/// Retreives all the bills in the database
fn get_all_bills(conn: &Connection) -> Result<Vec<Bill>, rusqlite::Error> {
    let mut result: Vec<Bill> = Vec::new();
    let sql = format!("SELECT * FROM {}", TABLENAME);
    let mut st = conn.prepare(sql.as_str())?;
    let rows = st.query_map([], |row| {
        Ok(Bill {
            id: Some(row.get(ID_COL)?),
            name: row.get(NAME_COL)?,
            total: row.get(TOTAL_COL)?,
            category: Some(row.get(CATEGORY_COL)?),
        })
    })?;

    for bill in rows {
        result.push(bill?)
    }

    Ok(result)
}

/// View all bills in a formatted table
pub fn view_bills(conn: &Connection) {
    println!("================================================================");
    println!("=================== Here are all your bills ====================");
    println!("================================================================");

    println!(
        "{0: <10} | {1: <10} | {2: <10} | {3: <10}",
        "ID", "Name", "Total", "Category"
    );

    let bills = match get_all_bills(conn) {
        Ok(bills) => bills,
        Err(e) => {
            println!("Could not get bills \n{}", e);
            Vec::new()
        }
    };
    for bill in bills {
        let mut dis_cat = "".to_owned();
        if let Some(cat) = bill.category {
            dis_cat = cat;
        };

        let id = match bill.id {
            Some(id) => format!("{}", &id),
            None => "".to_owned(),
        };
        println!(
            "{0: <10} | {1: <10} | {2: <10} | {3: <10}",
            id, bill.name, bill.total, dis_cat
        );
    }
    println!("================================================================");
}

fn total_bills(conn: &Connection) -> Result<f32, rusqlite::Error> {
    let sql = format!("SELECT SUM({}) FROM {}", TOTAL_COL, TABLENAME);
    let mut st = conn.prepare(sql.as_str())?;
    st.query_row([], |row| row.get(0))
}

pub fn total_bills_prompt(conn: &Connection) {
    println!("================================================================");
    match total_bills(conn) {
        Ok(tot) => println!("Your bill total is {}.", tot),
        Err(_) => println!("Could not total your bills."),
    };
    println!("================================================================");
}
