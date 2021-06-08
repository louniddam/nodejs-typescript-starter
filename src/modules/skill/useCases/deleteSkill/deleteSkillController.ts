import { DeleteSkill } from './deleteSkill'
import { Request, Response } from 'express'

export class DeleteSkillController {
    private useCase: DeleteSkill

    constructor(deleteSkill: DeleteSkill) {
        this.useCase = deleteSkill
    }

    public async deleteSkill(req: Request, res: Response){ 
        const id = req.params.id
        console.log("id");
        
        const skill = await this.useCase.deleteSkill( {id: id} )
        res.status(200).send(skill)
    }
}