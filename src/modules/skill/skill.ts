import { Category } from '../category/category'

interface ISkill {
    id: number
    name: string
    category: Category
}

export type Skillprops = {
    id: number
    name: string
    category: Category
}

export class Skill implements ISkill {
    public id: number
    public name: string
    public category: Category

    constructor(props: Skillprops) {
        this.id = props.id
        this.name = props.name
        this.category = props.category
    }
    
}