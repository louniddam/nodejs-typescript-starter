import { skillProps } from './skillTypes'

export class SkillRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async getSkills() {
        const SkillEntity = this.entities.Skill
        return await SkillEntity.find()
    }

    public async createSkill(props: skillProps){
        const SkillEntity = this.entities.Skill
        
        return await SkillEntity.create({ name: props.name, description: props.description, category: props.category }).save()
    }

    public async deleteSkill(id: number) {
        const SkillEntity = this.entities.Skill
        return await SkillEntity.delete(id)
    }

    public async modifySkill(id: number, props: skillProps) {
        const SkillEntity = this.entities.Skill
        const modifySkill = await SkillEntity.findOne({ where: { id: id } })

        return await SkillEntity.save({id: modifySkill.id, name: props.name, description: props.description})
    }

    public async getSkillById(id: number){
        const SkillEntity = this.entities.Skill

        return await SkillEntity.findOne({ where: { id } })
    }

}