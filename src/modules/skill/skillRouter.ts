import { Router } from 'express'
import { readSkillController } from './useCases/readSkill'
import { createSkillController } from './useCases/createSkill'
import {  deleteSkillController } from './useCases/deleteSkill'
import { modifySkillController } from './useCases/modifySkill'

const skillRouter: Router = Router();

skillRouter.get('/', (req, res) => readSkillController.readSkill(req, res))
skillRouter.post('/', (req, res) => createSkillController.createSkill(req, res))
skillRouter.delete('/:id', (req, res) => deleteSkillController.deleteSkill(req, res))
skillRouter.put('/:id', (req, res) => modifySkillController.modifySkill(req, res))

export { skillRouter }