import { ReadSkill } from './readSkill'
import { Request, Response } from 'express'

export class ReadSkillController {
    private useCase: ReadSkill

    constructor(useCase: ReadSkill) {
        this.useCase = useCase
    }

    public async readSkill(_: Request, res: Response) {
        const skills = await this.useCase.getSkills()
        
        res.status(200).json(skills)
    }
}