import { CreateCategory } from './createCategory'
import { request, Request, Response } from 'express'
//Controller

export class CreateCategoryController {
    private useCase: CreateCategory;

    constructor(createCategory: CreateCategory) {
        this.useCase = createCategory;
    }

    public async execute(req: Request, res: Response) {

        const { name, description } = req.body 

        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'name is required'
                }
            })
        }

        if (!description) {
            return res.status(400).json({
                error: {
                    message: 'Description is required'
                }
            });
        }

        // const categories = await this.useCase.getCategories();
        const createNewCategory = await this.useCase.execute({ name: name, description: description })
        console.log('Controller categories result', createNewCategory);

        res.status(200).json(createNewCategory);
    }
}