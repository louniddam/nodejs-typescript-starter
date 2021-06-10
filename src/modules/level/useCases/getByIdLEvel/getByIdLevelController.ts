import { GetByIdLevel } from './getByIdLevel'
import {Request, Response } from 'express'

export class GetByIdLevelController{
    private useCase: GetByIdLevel

    constructor(useCase: GetByIdLevel){
        this.useCase = useCase
    }

    public async findLevelByID(req: Request, res: Response){
       const id = parseInt(req.params.id)

        const newLevel = await this.useCase.findLevelById(id)

        res.status(200).send(newLevel)
    }
}