import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { GetByIdStudent } from './getByIdStudent'
import { GetByIdStudentController } from './getByIdStudentController'
import { StudentRepo } from '../../studentRepo'

const studentRepo = new StudentRepo(entitiesObject)
const getByIdStudent = new GetByIdStudent(studentRepo)
const getByIdStudentController = new GetByIdStudentController(getByIdStudent)

export { getByIdStudent, getByIdStudentController }