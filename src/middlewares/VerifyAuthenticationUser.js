import 'dotenv/config'

import Database from '../database/config'
import jwt from 'jsonwebtoken'

module.exports = {
    verifyAuthentication(req , res , next){

        const token = req.headers['x-access-token']
        console.log(token)
        if(!token) return res.status(401).json({auth: false, message: "No token provided"})
        jwt.verify(token, process.env.SECRET, function(err , decoded){
            if(err){
                return res.status(500).json({auth:  false , message: "Failed to authenticate token."})

            }

            const id =  decoded.id
            return res.json(id)
            next()
        })

        
    }
}