import { SkillRepo } from '../../skillRepo'
import { SkillProps } from '../../skillTypes'

export class CreateSkill {
    private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async createSkill(props: SkillProps) {
        return await this.skillRepo.createSkill(props)
    }
}