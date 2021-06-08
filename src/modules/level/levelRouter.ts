import { Router } from 'express'
import { createLevelController } from './useCases/createLevel'

const levelRouter: Router = Router()

levelRouter.post('/', (req, res) => createLevelController.createLevel(req,res))

export {  levelRouter }