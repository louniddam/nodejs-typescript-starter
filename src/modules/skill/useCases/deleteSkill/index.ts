import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { DeleteSkill } from './deleteSkill'
import { DeleteSkillController } from './deleteSkillController'
import { SkillRepo } from '../../skillRepo'

const skillRepo = new SkillRepo(entitiesObject)
const deleteSkill = new DeleteSkill(skillRepo)
const deleteSkillController = new DeleteSkillController(deleteSkill)

export { deleteSkill, deleteSkillController }