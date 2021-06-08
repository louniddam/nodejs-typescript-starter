import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { readCategoryController } from './useCases/readCategory'
import { getByIdCategoryController } from './useCases/getByIdCategory'
import { deleteCategoryController } from './useCases/deleteCategory'
import { updateCategoryController } from './useCases/updateCategory'

const categoryRouter: Router = Router();

categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (req, res) => readCategoryController.find(req, res))
categoryRouter.get('/:id', (req, res) =>  getByIdCategoryController.getByID(req,res)) 
categoryRouter.delete('/:id', (req, res) =>  deleteCategoryController.deleteCategory(req,res)) 
categoryRouter.put('/:id', (req, res) => updateCategoryController.updateCategory(req, res))

export { categoryRouter }