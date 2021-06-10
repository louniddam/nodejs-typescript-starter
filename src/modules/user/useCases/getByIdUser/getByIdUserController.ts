import { GetByIdUser } from './getByIdUSer'
import { Request, Response } from 'express'

export class GetByIdUserController {
    private useCase: GetByIdUser

    constructor(useCase: GetByIdUser){
        this.useCase = useCase
    }

    public async getUserById(req: Request, res: Response){
        const id = parseInt(req.params.id)


        const user = await this.useCase.getUserById(id)

        res.status(200).send(user)
    }
}