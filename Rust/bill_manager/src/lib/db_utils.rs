use crate::constants::{CATEGORY_COL, ID_COL, NAME_COL, TABLENAME, TOTAL_COL};
use rusqlite::{Connection, Error};

pub fn database_connection() -> Result<Connection, Error> {
    // TODO - use dotenv to get db path
    let path = "./bills.db3";
    Connection::open(path)
}

pub fn create_table(conn: &Connection) -> Result<usize, Error> {
    let query = format!(
        "CREATE TABLE IF NOT EXISTS {} (
        {} INTEGER PRIMARY KEY AUTOINCREMENT,
        {} TEXT NOT NULL,
        {} REAL NOT NULL, 
        {} TEXT NOT NULL
    )",
        TABLENAME, ID_COL, NAME_COL, TOTAL_COL, CATEGORY_COL
    );

    conn.execute(query.as_str(), ())
}
