const path = require("path");
module.exports = {
  client: 'pg',
  connection: process.env.POSTGRES_URI,
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seed: {
    directory: path.join(__dirname, 'seeds')
  },
  debug: true
}
