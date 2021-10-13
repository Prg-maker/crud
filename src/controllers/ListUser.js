const Database = require('../database/config')

module.exports={
  async list(req , res){
    const db = await Database()


    const list = await db.all(`SELECT * FROM user`)
    await db.close()
    return res.json(list)
  }
}