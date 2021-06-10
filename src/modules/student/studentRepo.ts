import { studentProps } from './studentTypes'


export class StudentRepo {
    private entities: any

    constructor(entities: any) {

        this.entities = entities
    }

    public async createStudent(studentProps: studentProps) {

        console.log("REPO:", studentProps);
        
        const studentEntity = this.entities.Student

        return await studentEntity.create({ firstName: studentProps.firstName, lastName: studentProps.lastName, user: studentProps.user }).save()
    }

    public async getStudentById(studentId: number) {
        const studentEntity = this.entities.Student

        return await studentEntity.findOne(studentId)
    }
}