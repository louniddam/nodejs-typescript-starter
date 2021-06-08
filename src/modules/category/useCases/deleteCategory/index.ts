import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { DeleteCategory } from './deleteCategory'
import { DeleteCategoryController } from './deleteCategoryController'
import { CategoryRepo } from '../../categoryRepo'

const categoryRepo = new CategoryRepo(entitiesObject)
const deleteCategory = new DeleteCategory(categoryRepo)
const deleteCategoryController = new DeleteCategoryController(deleteCategory)

export { deleteCategory, deleteCategoryController }