  import { Router } from 'express'
import { createProgressController } from './useCases/createProgression/'

const progressionRouter: Router = Router();

progressionRouter.post('/', (req, res) => createProgressController.execute(req, res))

export { progressionRouter }