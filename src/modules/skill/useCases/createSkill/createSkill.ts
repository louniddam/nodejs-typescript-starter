import { SkillRepo } from '../../skillRepo'
import { skillProps } from '../../skillTypes'
import { CategoryRepo } from '../../../category/categoryRepo'

export class CreateSkill {
    private skillRepo: SkillRepo
    private categoryRepo: CategoryRepo

    constructor(skillRepo: SkillRepo, categoryRepo: CategoryRepo) {
        this.skillRepo = skillRepo
        this.categoryRepo = categoryRepo
    }

    public async createSkill(props: skillProps) {
        const { category } = props
        let categoryEntity = null

        if(category){
            const foundCategory = await this.categoryRepo.getByIdCategory(category)

            if(foundCategory){
                categoryEntity = foundCategory
            }
        }
        props.category = categoryEntity

        return await this.skillRepo.createSkill(props)
    }
}