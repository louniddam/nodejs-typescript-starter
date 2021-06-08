import { Router } from 'express'
import { createUserController } from './useCases/createUser/index'

const userRouter: Router = Router();

userRouter.post('/', (req, res) => createUserController.execute(req, res))

export { userRouter }