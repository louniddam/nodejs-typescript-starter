import { CreateStudent } from './createStudent'
import { Request, Response } from 'express'


export class CreateStudentController {
    private useCase: CreateStudent;

    constructor(createStudent: CreateStudent) {
        this.useCase = createStudent;
    }

    public async createStudent(req: Request, res: Response) {

        const { firstName, lastName, user } = req.body
        console.log("REQ.B :",req.body);
        
        const student = await this.useCase.createStudent({ firstName, lastName, user });

        return res.status(200).json(student);
    }
}