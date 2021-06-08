import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { ModifySkillController } from './modifySkillController'
import { ModifySkill } from './modifySkill'

const skillRepo = new SkillRepo(entitiesObject)
const modifySkill = new ModifySkill(skillRepo)
const modifySkillController = new ModifySkillController(modifySkill)

export { modifySkill, modifySkillController }