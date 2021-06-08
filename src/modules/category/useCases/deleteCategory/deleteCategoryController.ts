import { DeleteCategory } from './deleteCategory'
import { Request, Response } from 'express'

export class DeleteCategoryController {
    private useCase: DeleteCategory

    constructor(deleteCategory: DeleteCategory) {
        this.useCase = deleteCategory
    }

    public async deleteCategory(req: Request, res: Response) {
        
        const id = req.params.id
        const category = await this.useCase.deleteCategory({id: id})
        res.status(200).send(category)
    }
}