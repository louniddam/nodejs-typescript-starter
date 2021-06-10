import { Router } from 'express'
import { createUserController } from './useCases/createUser/index'
import { getByIdUserController } from './useCases/getByIdUser/index'

const userRouter: Router = Router();

userRouter.post('/', (req, res) => createUserController.execute(req, res))
userRouter.get('/:id', (req, res) => getByIdUserController.getUserById(req, res))

export { userRouter }