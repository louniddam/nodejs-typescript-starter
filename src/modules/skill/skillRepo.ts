import { SkillProps } from './skillTypes'

export class SkillRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async getSkills() {
        const SkillEntity = this.entities.Skill
        return await SkillEntity.find()
    }

    public async createSkill(props: SkillProps){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.create({ name: props.name, description: props.description, categoryId: props.categoryId }).save()
    }

    public async deleteSkill(id: string) {
        const SkillEntity = this.entities.Skill
        return await SkillEntity.delete(id)
    }

    public async modifySkill(id: String, props: SkillProps) {
        const SkillEntity = this.entities.Skill
        const modifySkill = await SkillEntity.find({ where: { id: id } })

        return await SkillEntity.save(modifySkill, {name: props.name, description: props.description})

    }

}