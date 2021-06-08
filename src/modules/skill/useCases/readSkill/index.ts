import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { ReadSkill } from '../readSkill/readSkill'
import { ReadSkillController } from './readSkillController'

const skillRepo = new SkillRepo(entitiesObject)
const readSkill = new ReadSkill(skillRepo)
const readSkillController = new ReadSkillController(readSkill)

export { readSkill, readSkillController }
