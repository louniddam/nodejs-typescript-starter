import { ModifySkill } from './modifySkill'
import { Request, Response } from 'express'

export class ModifySkillController {
    private useCase: ModifySkill

    constructor(useCase: ModifySkill){
        this.useCase = useCase
    }

    public async modifySkill(req: Request, res: Response){
        const id = req.params.id
        const { categoryId, name, description } = req.body
        const skill = await this.useCase.modifySkill( id, { name, description, categoryId } )

        res.status(200).send(skill)
    }
}