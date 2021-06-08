interface ILevel {
    id: number
    name: string
}

export type LevelProps = {
    id: number
    name: string
}

export class Level implements ILevel {
    public id: number
    public name: string

    constructor(props: LevelProps){
        this.id = props.id
        this.name = props.name
    }
}