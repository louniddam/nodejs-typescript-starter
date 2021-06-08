import { CreateLevel } from './createLevel'
import { Request, Response } from 'express'

export class CreateLevelController {
    private useCase: CreateLevel

    constructor(useCase: CreateLevel){
        this.useCase = useCase
    }

    public async createLevel(req: Request, res: Response) {
        const { level, name } = req.body
        const newLevel = await this.useCase.createLevel({ level, name })

        res.status(200).send(newLevel)
    }

}