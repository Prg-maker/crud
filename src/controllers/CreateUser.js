import {v4 as uuid} from 'uuid'
const Database = require('../database/config')


module.exports = {
  async user(req , res){
    const {name , email , password} = req.body
    const id = uuid()
    const db = await Database()

    const emailExists = await  db.all(`SELECT email FROM user`)

    emailExists.map(async content =>{
      if(email == content.email){
        return res.send('user exists')
      }
    })

    await db.run(`INSERT INTO user (
      id,
      name,
      email,
      password
    )VALUES(
      "${id}",
      "${name}",
      "${email}",
      "${password}"
    )`)

    await db.close()
   

    const user = {
      id,
      name,
      email,
      password
    }

    return res.json(user)

  }


}