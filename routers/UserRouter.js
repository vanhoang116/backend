import express from 'express'
import {getAllUser, registerUser, login, DeleteUser} from '../controllers/UserController.js'
const UserRouter = express.Router()
import {isAuth, isAdmin} from '../utils/until.js'

UserRouter.post('/register', registerUser)
UserRouter.post('/login', login)

UserRouter.get('/', getAllUser)
UserRouter.delete('/delete/:id', DeleteUser)

export default UserRouter
