import { SkillRepo } from '../../skillRepo'
import { SkillProps } from '../../skillTypes'

export class ModifySkill{
   private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async modifySkill(id: String, props: SkillProps){
        return await this.skillRepo.modifySkill(id, props)
    }
}