import { SkillRepo } from '../../skillRepo'
import { skillProps } from '../../skillTypes'

export class ModifySkill{
   private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async modifySkill(id: number, props: skillProps){
        return await this.skillRepo.modifySkill(id, props)
    }
}