import express from 'express'
import { authUser, welcomeToApiUser } from '../controllers/userController.js'


const router = express.Router()

router.route('/').get(welcomeToApiUser)

router.post('/login', authUser)

export default router