const {open} = require('sqlite')
const sqlite = require('sqlite3')

module.exports = () => open({
  filename: "./src/database/User.sqlite",
  driver: sqlite.Database
})