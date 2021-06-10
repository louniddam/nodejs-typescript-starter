import { GetByIdStudent } from './getByIdStudent'
import { Request, Response } from 'express'

export class GetByIdStudentController{
    private useCase: GetByIdStudent

    constructor(useCase: GetByIdStudent){
        this.useCase = useCase
    }

    public async getStudentById(req: Request, res: Response){
        const id = parseInt(req.params.id)

        const student = await this.useCase.getStudentById(id)

        res.status(200).send(student)
    }
}