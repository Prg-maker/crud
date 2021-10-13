import Database from '../database/config'

module.exports = {
  async delete(req , res){
    const {name , password , email , id} =  req.body

    const db = await Database()
    

    const user = {
      id,
      name,
      password,
      email
    }

    await db.run(`DELETE FROM  user WHERE  id = "${user.id}" AND name = "${user.name}"  AND password = ${user.password}`)
    await db.close()
    
    return res.json(user)
  }
}