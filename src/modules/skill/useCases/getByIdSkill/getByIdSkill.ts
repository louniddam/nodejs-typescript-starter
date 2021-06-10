import { SkillRepo } from '../../skillRepo'

export class GetByIdSkill{
    private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async getSkillById(id: number){
        return await this.skillRepo.getSkillById(id)
    }

}