import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillController } from './createSkillController'
import { CategoryRepo } from '../../../category/categoryRepo'

const skillRepo = new SkillRepo(entitiesObject)
const categoryRepo = new CategoryRepo(entitiesObject)
const createSkill = new CreateSkill(skillRepo, categoryRepo)
const createSkillController = new CreateSkillController(createSkill)

export { createSkill, createSkillController }
