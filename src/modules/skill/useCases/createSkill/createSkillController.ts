import { CreateSkill } from './CreateSkill'
import { Request, Response } from 'express'

export class CreateSkillController {
    private useCase: CreateSkill

    constructor(useCase: CreateSkill) {
        this.useCase = useCase
    }

    public async execute(_: Request, res: Response) {
        const skills = await this.useCase.getSkills()
        console.log('Controller skills', skills);
        res.status(200).json(skills)
    }
}