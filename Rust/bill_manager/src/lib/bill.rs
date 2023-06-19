use rusqlite::Connection;

use crate::constants::{CATEGORY_COL, ID_COL, NAME_COL, TABLENAME, TOTAL_COL};

#[derive(Debug)]
pub struct Bill {
    pub id: Option<i32>,
    pub name: String,
    pub category: Option<String>,
    pub total: f32,
}

impl Bill {
    /// Creates a new Bill
    pub fn new(id: Option<i32>, name: String, category: Option<String>, total: f32) -> Self {
        Bill {
            id,
            name,
            category,
            total,
        }
    }

    /// Update the current bill
    pub fn update(
        &mut self,
        id: Option<i32>,
        name: Option<String>,
        category: Option<String>,
        total: Option<f32>,
    ) {
        if id.is_some() {
            self.id = id;
        }

        if name.is_some() {
            self.name = name.unwrap();
        }

        if category.is_some() {
            self.category = category;
        }

        if total.is_some() {
            self.total;
        }
    }

    /// Update the name of a Bill
    pub fn update_name(&mut self, new_name: String) {
        self.name = new_name;
    }

    /// Update the total of a bill
    pub fn update_total(&mut self, new_total: f32) {
        self.total = new_total;
    }

    /// Update the category of a bill
    pub fn update_category(&mut self, new_cat: Option<String>) {
        self.category = new_cat;
    }
}

/// Retrieves a single bill from the database for an ID
pub fn get_bill(conn: &Connection, id: Option<i32>) -> Result<Bill, rusqlite::Error> {
    match id {
        Some(bill_id) => {
            let sql = format!("SELECT * FROM {} WHERE {} = ?1", TABLENAME, ID_COL);
            let mut st = conn.prepare(sql.as_str())?;
            st.query_row([bill_id], |row| {
                Ok(Bill::new(
                    Some(row.get(ID_COL)?),
                    row.get(NAME_COL)?,
                    Some(row.get(CATEGORY_COL)?),
                    row.get(TOTAL_COL)?,
                ))
            })
        }
        None => {
            println!("No ID provided.");
            Err(rusqlite::Error::InvalidParameterCount(0, 1))
        }
    }
}

/// Retreives all the bills in the database
fn get_all_bills(conn: &Connection) -> Result<Vec<Bill>, rusqlite::Error> {
    let mut result: Vec<Bill> = Vec::new();
    let sql = format!("SELECT * FROM {}", TABLENAME);
    let mut st = conn.prepare(sql.as_str())?;
    let rows = st.query_map([], |row| {
        Ok(Bill::new(
            Some(row.get(ID_COL)?),
            row.get(NAME_COL)?,
            Some(row.get(CATEGORY_COL)?),
            row.get(TOTAL_COL)?,
        ))
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

/// Calculates the total bills in the database
fn total_bills(conn: &Connection) -> Result<f32, rusqlite::Error> {
    let sql = format!("SELECT SUM({}) FROM {}", TOTAL_COL, TABLENAME);
    let mut st = conn.prepare(sql.as_str())?;
    st.query_row([], |row| row.get(0))
}

/// Outputs the total of all the bills in the database
pub fn total_bills_prompt(conn: &Connection) {
    println!("================================================================");
    match total_bills(conn) {
        Ok(tot) => println!("Your bill total is {}.", tot),
        Err(_) => println!("Could not total your bills."),
    };
    println!("================================================================");
}
