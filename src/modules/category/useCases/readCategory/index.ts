import { CategoryRepo } from '../../categoryRepo'
import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ReadCategory } from './readCategory'
import { ReadCategoryController } from './readCategoryController'

const categoryRepo = new CategoryRepo(entitiesObject)
const readCategory = new ReadCategory(categoryRepo)
const readCategoryController = new ReadCategoryController(readCategory)

export { readCategory, readCategoryController }