import { GetByIdCategory } from './getByIdCategory'
import { Request, Response } from 'express'

export class GetByIdCategoryController {
    private useCase: GetByIdCategory

    constructor(getByIdCategory: GetByIdCategory) {
        this.useCase = getByIdCategory
    }

    public async getByID(req: Request, res: Response) {
        const  id  = req.params.id
        console.log(id);
        
        const category = await this.useCase.getByIdCategory(id)
        res.status(200).send(category)
    }
}