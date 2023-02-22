const path = require("path");
module.exports = {
  client: 'sqlite3',
  connection: {
    filename:path.join(__dirname, 'db.sqlite3')
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seed: {
    directory: path.join(__dirname, 'seeds')
  }
}
