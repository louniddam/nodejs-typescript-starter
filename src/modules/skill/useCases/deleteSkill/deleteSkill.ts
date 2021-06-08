import { SkillRepo } from '../../skillRepo'

export class DeleteSkill {
    private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async deleteSkill(id: any) {
        return await this.skillRepo.deleteSkill(id)
    }
}