import { Router } from 'express'
import { createStudentController } from './useCases/createStudent/'
import { getByIdStudentController } from './useCases/getByIdStudent'

const studentRouter: Router = Router();

studentRouter.post('/', (req, res) => createStudentController.createStudent(req, res))
studentRouter.get('/:id', (req, res) => getByIdStudentController.getStudentById(req, res))

export { studentRouter }