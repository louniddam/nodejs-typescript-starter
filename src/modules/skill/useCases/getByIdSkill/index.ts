import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { GetByIdSkill } from './getByIdSkill'
import { GetByIdSkillController } from './getByIdSkillController'

const skillRepo = new SkillRepo(entitiesObject)
const getByIdSkill = new GetByIdSkill(skillRepo)
const getByIdSkillController = new GetByIdSkillController(getByIdSkill)

export { getByIdSkill, getByIdSkillController }