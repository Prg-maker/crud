require('dotenv').config()

import Database from '../database/config'
import jwt from 'jsonwebtoken'


module.exports = {
  async login(req , res){
    
    const {name , email , password } = req.body
    const db = await Database()
    


    try{
      const  data = await db.get(`SELECT * FROM user WHERE name LIKE '${name}'  AND password = ${password}`)
      await db.close()

      const id = data.id

      const token = jwt.sign({id}, process.env.SECRET , {
        expiresIn: 300
      },)


      return res.json({  id ,auth: name, email , password,  token: token });


    }catch(err){
      return res.send('errou')
    }
    
  },
  logout(req , res){
    res.json({auth:false , token: null})
  }


}
