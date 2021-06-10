import { StudentRepo } from '../../studentRepo'

export class GetByIdStudent{
    private studentRepo: StudentRepo
    constructor(studentRepo: StudentRepo){
        this.studentRepo = studentRepo
    }

    public async getStudentById(id: number){
        return await this.studentRepo.getStudentById(id)
    }
}