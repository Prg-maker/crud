const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE user(
      id TEXT,
      name TEXT,
      email TEXT ,
      password TEXT 
    )`)

    await db.close()

  }



}

initDb.init()

