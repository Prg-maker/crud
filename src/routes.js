import 'dotenv/config'
import express from 'express'
import jwt from 'jsonwebtoken'
const routes = express.Router()


import Authentication from './controllers/AuthenticationUser'
import UserController from './controllers/CreateUser'
import ListUser from './controllers/ListUser'
import DeleteUser from './controllers/DeleteUser'
import User from './controllers/User'
import UpdatePasswordUser from './controllers/UpdatePasswordUser'


import VerifyAuthenticationUser from './middlewares/VerifyAuthenticationUser'

routes.post('/user', UserController.user )
routes.post('/login', Authentication.login )
routes.post('/list', ListUser.list )
routes.post('/logout', Authentication.logout)

routes.put('/update', UpdatePasswordUser.update)

routes.delete('/delete',  DeleteUser.delete)


routes.get('/content', VerifyAuthenticationUser.verifyAuthentication ,  User.user )

module.exports = routes