interface ISkill {
    id: number
    name: string
}

export type Skillprops = {
    id: number
    name: string
}

export class Skill implements ISkill {
    public id: number
    public name: string

    constructor(props: Skillprops) {
        this.id = props.id
        this.name = props.name
    }
    
}