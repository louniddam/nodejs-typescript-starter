import { CategoryRepo } from '../../categoryRepo'
import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UpdateCategoryController } from '../updateCategory/updateCategoryController'
import { UpdateCategory } from '../updateCategory/updateCategory'

const categoryRepo = new CategoryRepo(entitiesObject)
const updateCategory = new UpdateCategory(categoryRepo)
const updateCategoryController = new UpdateCategoryController(updateCategory)

export { updateCategory, updateCategoryController }