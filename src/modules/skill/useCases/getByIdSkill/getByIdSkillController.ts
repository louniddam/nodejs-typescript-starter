import { GetByIdSkill } from './getByIdSkill'
import { Request, Response } from 'express'

export class GetByIdSkillController {
    private useCase: GetByIdSkill

    constructor(useCase: GetByIdSkill){
        this.useCase = useCase
    }

    public async getSkillById(req: Request, res: Response){
        const id = parseInt(req.params.id)

        const skill = await this.useCase.getSkillById(id)

        res.status(200).send(skill)
    }
}