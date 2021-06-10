import { Router } from 'express'
import { createLevelController } from './useCases/createLevel'
import { getByIdLevelController } from './useCases/getByIdLEvel'

const levelRouter: Router = Router()

levelRouter.post('/', (req, res) => createLevelController.createLevel(req,res))
levelRouter.get('/:id', (req, res) => getByIdLevelController.findLevelByID(req,res))

export {  levelRouter }