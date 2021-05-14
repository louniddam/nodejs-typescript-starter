import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { readCategoryController } from './useCases/readCategory'

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/create', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (req, res) => readCategoryController.find(req, res))

export { categoryRouter }