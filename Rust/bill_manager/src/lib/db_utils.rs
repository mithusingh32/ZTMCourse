use rusqlite::{Connection, Error};

pub fn database_connection() -> Result<Connection, Error> {
    // TODO - use dotenv to get db path
    let path = "./bills.db3";
    Connection::open(path)
}

pub fn create_table(conn: &Connection) -> Result<usize, Error> {
    let query = "CREATE TABLE IF NOT EXISTS bills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        total REAL NOT NULL, 
        category INTEGER NOT NULL
    )";

    conn.execute(query, ())
}
