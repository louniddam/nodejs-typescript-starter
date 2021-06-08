import { SkillRepo } from "../../skillRepo"

export class ReadSkill {
    private skillRepo: SkillRepo

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async getSkills() {
        return await this.skillRepo.getSkills()
    }

}