import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import { GetByIdCategory } from './getByIdCategory'
import { GetByIdCategoryController } from './getByIdCategoryController'

const categoryRepo = new CategoryRepo(entitiesObject)
const getByIdCategory = new GetByIdCategory(categoryRepo)
const getByIdCategoryController = new GetByIdCategoryController(getByIdCategory)

export { getByIdCategory, getByIdCategoryController }