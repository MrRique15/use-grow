import { Router } from 'express'
import UsersController from '../controllers/UsersController'

//---------------------------------------------------------------------------------------------------------------------
const router = Router()
const usersController = new UsersController()
//---------------------------------------------------------------------------------------------------------------------
router.get('/user', usersController.list)

router.get('/user/getByEmail', usersController.getByEmail)

router.post('/user/register', usersController.firstRegister)

router.delete('/user/delete', usersController.delete)

router.put('/user/update', usersController.update)

router.post('/user/login', usersController.login)

router.put('/user/completeRegister', usersController.fullRegister)
//---------------------------------------------------------------------------------------------------------------------
export default router