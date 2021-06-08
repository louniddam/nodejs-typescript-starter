import { CreateSkill } from './createSkill'
import { Request, Response } from 'express'

export class CreateSkillController {
    private useCase : CreateSkill

    constructor(useCase: CreateSkill){
        this.useCase = useCase
    }

    public async createSkill(req: Request, res: Response){
        const name = req.body.name
        const description = req.body.description
        const categoryId = req.body.categoryId

        const newSkill =  await this.useCase.createSkill({ name: name, description: description, categoryId: categoryId })

        res.status(200).send(newSkill)
    }
}