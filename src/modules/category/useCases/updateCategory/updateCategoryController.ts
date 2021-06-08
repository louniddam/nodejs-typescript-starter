import { UpdateCategory } from './updateCategory'
import { Request, Response } from 'express'

export class UpdateCategoryController {
    private useCase: UpdateCategory

    constructor(useCase: UpdateCategory){
        this.useCase = useCase
    }

    public async updateCategory (req: Request, res: Response) {
        const name = req.body.name
        const description = req.body.description
        const id = req.params.id

        const category = await this.useCase.updateCategory(id, {name, description})

        res.status(200).send(category)
    }
}