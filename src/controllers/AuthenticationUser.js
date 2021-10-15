require('dotenv').config()

import Database from '../database/config'
import jwt from 'jsonwebtoken'


module.exports = {
  async login(req , res ){
    
    const {name , email , password } = req.body
    const db = await Database()
    


    try{
      const  data = await db.get(`SELECT * FROM user WHERE name LIKE '${name}'  AND password = ${password} AND email = '${email}'`)
      await db.close()

      const id = data.id

      const token = jwt.sign({id}, process.env.SECRET , {
        expiresIn: 30000
      },)

      
      return res.json({  id , name, email , password,  token: token });


    }catch(err){
      return res.send('errou')
    }
    
  },
  logout(req , res){
    const {name , token , password } = req.body


    res.json({name:false , token: null , password: null})
  }


}
