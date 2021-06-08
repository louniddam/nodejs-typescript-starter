import { CreateCategory } from './createCategory'
import { Request, Response } from 'express'
//Controller

export class CreateCategoryController {
    private useCase: CreateCategory;

    constructor(createCategory: CreateCategory) {
        this.useCase = createCategory;
    }

    public async execute(req: Request, res: Response) {
        
        const { name, description } = req.body

        const categories = await this.useCase.execute({ name, description });

        res.status(200).json(categories);
    }
}