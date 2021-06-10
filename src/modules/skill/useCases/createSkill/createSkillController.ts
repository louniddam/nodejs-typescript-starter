import { CreateSkill } from './createSkill'
import { Request, Response } from 'express'

export class CreateSkillController {
    private useCase : CreateSkill

    constructor(useCase: CreateSkill){
        this.useCase = useCase
    }

    public async createSkill(req: Request, res: Response){

        const { name, description, category } = req.body

        console.log("REQ.BODY = ",req.body);
        
        const newSkill =  await this.useCase.createSkill({ name, description, category })

        console.log("NEWSKILL:", newSkill);
        
        res.status(200).send(newSkill)
    }
}