import { CreateProgress } from './createProgression'
import { Request, Response } from 'express'

export class CreateProgressController{
    private useCase: CreateProgress

    constructor(useCase: CreateProgress){
        this.useCase = useCase
    }

    public async createProgress(req: Request, res: Response){
        const { level, student, skill } = req.body
        const progress = await this.useCase.createProgress({level, skill, student})

        res.status(200).send(progress)
    }
}