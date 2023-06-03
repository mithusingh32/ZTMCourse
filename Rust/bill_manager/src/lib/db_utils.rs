use rusqlite::{Connection, Error};

pub fn create_table(conn: &Connection) -> Result<usize, Error> {
    let query = "CREATE TABLE bills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        total REAL NOT NULL, 
        category INTEGER NOT NULL
    ) WITHOUT ROWID";

    conn.execute(query, ())
}
