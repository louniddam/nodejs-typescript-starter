import { CategoryRepo } from '../../categoryRepo'
import { entities } from '../../../../app/database/typeorm/entities'
import { ReadCategory } from './readCategory'
import { ReadCategoryController } from './readCategoryController'

const categoryRepo = new CategoryRepo(entities)
const readCategory = new ReadCategory(categoryRepo)
const readCategoryController = new ReadCategoryController(readCategory)

export { readCategory, readCategoryController }