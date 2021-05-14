import { ReadCategory } from './readCategory'
import { Request, Response } from 'express'

export class ReadCategoryController {
    private useCase: ReadCategory

    constructor(readCategory: ReadCategory) {
        this.useCase = readCategory
    }
    
    public async find(_: Request, res: Response) {
        const categories = await this.useCase.getCategories();

        res.status(200).send(categories)
    }

}