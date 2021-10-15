import Database from '../database/config'

module.exports = {
  async update(req , res){
    const {id , name ,  email , password } = req.body
    const db = await Database()

    password : await db.get(`UPDATE user SET password = ${password}   WHERE id = '${id}'`)
    name : await db.get(`UPDATE user SET name = '${name}'   WHERE id = '${id}'`)
    email :   await db.get(`UPDATE user SET email = '${email}'   WHERE id = '${id}'`)
  
    await db.close()


    const user = {
      id,
      password,
      name,
      email
    }
    return res.json(user)
  }
}